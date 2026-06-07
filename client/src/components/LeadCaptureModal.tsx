import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappLink: string;
  buttonText?: string;
}

export default function LeadCaptureModal({ isOpen, onClose, whatsappLink, buttonText = "Falar com Consultor" }: LeadCaptureModalProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(formatPhone(e.target.value));
  };

  const isFormValid = () => {
    return nome.trim().length >= 2 && 
           email.includes("@") && email.includes(".") && 
           telefone.replace(/\D/g, "").length >= 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isFormValid()) {
      setError("Por favor, preencha todos os campos corretamente.");
      return;
    }

    setIsLoading(true);

    try {
      // Enviar lead por email via EmailJS
      const templateParams = {
        from_name: nome,
        from_email: email,
        phone: telefone,
        to_email: "fabiana.giacomini@inovainfo.com.br",
        message: `Novo lead capturado pelo site:\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nBotão clicado: ${buttonText}\nData: ${new Date().toLocaleString("pt-BR")}`
      };

      // Usar EmailJS para enviar
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: "service_inova_leads",
          template_id: "template_lead_capture",
          user_id: "YOUR_EMAILJS_PUBLIC_KEY",
          template_params: templateParams
        })
      });

      // Mesmo se o EmailJS falhar, vamos salvar localmente e liberar o WhatsApp
      // O importante é capturar o lead
      console.log("Lead capturado:", templateParams);
      
      // Fallback: enviar via formsubmit.co (não precisa de configuração)
      await fetch("https://formsubmit.co/ajax/fabiana.giacomini@inovainfo.com.br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          telefone: telefone,
          botao: buttonText,
          data: new Date().toLocaleString("pt-BR"),
          _subject: `🟢 Novo Lead Site INOVA - ${nome}`,
          _template: "table"
        })
      });

      setIsSubmitted(true);
    } catch (err) {
      // Mesmo com erro, liberar o WhatsApp (o lead já foi logado no console)
      console.error("Erro ao enviar lead:", err);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    // Adicionar nome na mensagem do WhatsApp
    const message = encodeURIComponent(`Olá! Meu nome é ${nome} e gostaria de falar com um consultor.`);
    const linkWithMessage = `${whatsappLink}?text=${message}`;
    window.open(linkWithMessage, "_blank");
    onClose();
    // Reset form
    setNome("");
    setEmail("");
    setTelefone("");
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white w-full max-w-md shadow-2xl border border-border animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="bg-foreground text-white p-6 pb-4">
              <h3 className="font-display font-bold text-xl mb-1">Fale com nosso consultor</h3>
              <p className="text-gray-300 text-sm">
                Preencha seus dados para ser atendido via WhatsApp
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  required
                  className="w-full h-12 px-4 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full h-12 px-4 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  value={telefone}
                  onChange={handlePhoneChange}
                  placeholder="(49) 99999-9999"
                  required
                  className="w-full h-12 px-4 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs font-medium">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isLoading || !isFormValid()}
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-sm uppercase tracking-widest font-bold rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Continuar para WhatsApp"}
              </Button>

              <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                Ao preencher este formulário, você concorda em receber contato da equipe INOVA Soluções.
              </p>
            </form>
          </>
        ) : (
          /* Success State - WhatsApp Button */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Dados recebidos!</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Clique no botão abaixo para iniciar a conversa no WhatsApp com nosso consultor.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white h-14 text-sm uppercase tracking-widest font-bold rounded-none"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Abrir WhatsApp
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Hook para usar o modal de captura de lead
export function useLeadCapture() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Falar com Consultor");

  const openModal = (text?: string) => {
    if (text) setButtonText(text);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal, buttonText };
}
