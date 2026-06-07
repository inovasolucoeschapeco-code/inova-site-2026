import { createContext, useContext, useState, type ReactNode } from "react";
import LeadCaptureModal from "@/components/LeadCaptureModal";

interface LeadCaptureContextType {
  openLeadModal: (buttonText?: string) => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | null>(null);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Falar com Consultor");
  const whatsappLink = "https://wa.me/554933193900";

  const openLeadModal = (text?: string) => {
    if (text) setButtonText(text);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadCaptureContext.Provider value={{ openLeadModal }}>
      {children}
      <LeadCaptureModal
        isOpen={isOpen}
        onClose={closeModal}
        whatsappLink={whatsappLink}
        buttonText={buttonText}
      />
    </LeadCaptureContext.Provider>
  );
}

export function useLeadCapture() {
  const context = useContext(LeadCaptureContext);
  if (!context) {
    throw new Error("useLeadCapture must be used within a LeadCaptureProvider");
  }
  return context;
}
