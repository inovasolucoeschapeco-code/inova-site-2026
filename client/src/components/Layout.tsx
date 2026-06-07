import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { openLeadModal } = useLeadCapture();

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Soluções", path: "/solucoes" },
    { name: "Cases", path: "/cases" },
    { name: "Clientes", path: "/clientes" },
    { name: "Sobre", path: "/sobre" },
  ];

  const whatsappLink = "https://wa.me/554933193900";

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Top Bar */}
      <div className="bg-foreground text-background py-2 px-4 text-xs font-medium tracking-wider uppercase hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" /> (49) 3319-3900
            </span>
            <span>Chapecó - SC</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/inovasolucoestecnologicas" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="w-3 h-3" />
            </a>
            <a href="https://www.linkedin.com/company/inovainfo" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          {/* Logo - Aumentada */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img src="/images/logo.png" alt="Inova Soluções Tecnológicas" className="h-12 md:h-14 w-auto object-contain max-w-[200px] md:max-w-[260px]" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={`text-sm font-medium uppercase tracking-wide cursor-pointer hover:text-primary transition-colors ${location === item.path ? "text-primary font-bold" : "text-foreground"}`}>
                  {item.name}
                </span>
              </Link>
            ))}
            <Button 
              onClick={() => openLeadModal("Falar com Consultor")}
              className="bg-primary hover:bg-primary/90 text-white font-medium uppercase tracking-wide text-xs px-6 h-10 rounded-none cursor-pointer"
            >
              Falar com Consultor
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span 
                  className={`block py-2 text-lg font-display font-medium cursor-pointer ${location === item.path ? "text-primary" : "text-foreground"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button 
              onClick={() => { openLeadModal("Falar com Consultor"); setIsMenuOpen(false); }}
              className="w-full bg-primary text-white rounded-none mt-4 cursor-pointer"
            >
              Falar com Consultor
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-16 pb-8 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <img src="/images/logo.png" alt="Inova Soluções Tecnológicas" className="h-14 md:h-16 w-auto object-contain brightness-0 invert max-w-[250px]" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Há 33 anos construindo o futuro da tecnologia. Parceira estratégica para empresas que buscam infraestrutura sólida e segurança digital.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-primary">Soluções</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/solucoes"><span className="hover:text-white transition-colors cursor-pointer">Infraestrutura & Redes</span></Link></li>
                <li><Link href="/solucoes"><span className="hover:text-white transition-colors cursor-pointer">Segurança Digital</span></Link></li>
                <li><Link href="/solucoes"><span className="hover:text-white transition-colors cursor-pointer">Produtividade</span></Link></li>
                <li><Link href="/solucoes"><span className="hover:text-white transition-colors cursor-pointer">Suporte & Gestão</span></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-primary">Empresa</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/sobre"><span className="hover:text-white transition-colors cursor-pointer">Sobre Nós</span></Link></li>
                <li><Link href="/cases"><span className="hover:text-white transition-colors cursor-pointer">Cases de Sucesso</span></Link></li>
                <li><Link href="/clientes"><span className="hover:text-white transition-colors cursor-pointer">Clientes</span></Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-primary">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">📍</span>
                  Rua Florianópolis, 254 D<br />Centro, Chapecó - SC
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">📞</span>
                  (49) 3319-3900
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✉️</span>
                  contato@inovainfo.com.br
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="text-center md:text-left">
              <p>© {new Date().getFullYear()} Inova Soluções Tecnológicas. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ: 02.705.808/0001-08</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Política de Privacidade</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
