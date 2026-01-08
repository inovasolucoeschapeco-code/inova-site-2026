import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Shield, Server, Users, Zap, Check, ArrowRight } from "lucide-react";

export default function Solucoes() {
  const whatsappLink = "https://wa.me/554933193900";

  const pillars = [
    {
      id: "infraestrutura",
      title: "Infraestrutura Confiável",
      icon: <Server className="w-12 h-12 text-primary" />,
      description: "A base sólida para sua operação. Projetamos e executamos infraestruturas de rede que suportam o crescimento do seu negócio com estabilidade e alta performance.",
      services: [
        "Cabeamento Estruturado (Cat6, Cat6A, Fibra Óptica)",
        "Redes Wi-Fi Corporativas de Alta Densidade",
        "Instalação e Configuração de Servidores",
        "Soluções de Storage e Armazenamento",
        "Nobreaks e Energia Segura"
      ],
      image: "/images/hero-infrastructure.jpg"
    },
    {
      id: "seguranca",
      title: "Segurança Digital Total",
      icon: <Shield className="w-12 h-12 text-primary" />,
      description: "Proteção proativa contra ameaças. Blindamos seus dados e garantimos a continuidade do negócio mesmo em cenários críticos.",
      services: [
        "Firewall Gerenciado como Serviço (FWaaS)",
        "Cloud Backup e Disaster Recovery",
        "Proteção de Endpoint (Antivírus Corporativo)",
        "CFTV IP e Controle de Acesso",
        "Gestão de Vulnerabilidades"
      ],
      image: "/images/security-shield.jpg"
    },
    {
      id: "produtividade",
      title: "Produtividade Corporativa",
      icon: <Zap className="w-12 h-12 text-primary" />,
      description: "Ferramentas que potencializam seu time. Entregamos o ambiente de trabalho digital ideal para máxima colaboração e eficiência.",
      services: [
        "Licenciamento Microsoft 365 e Adobe",
        "Venda de Desktops e Notebooks",
        "Soluções de Videoconferência",
        "Hospedagem de E-mail Corporativo",
        "Automação Comercial"
      ],
      image: "/images/productivity-office.jpg"
    },
    {
      id: "suporte",
      title: "Gestão e Suporte de TI",
      icon: <Users className="w-12 h-12 text-primary" />,
      description: "Sua TI em boas mãos. Terceirize a gestão técnica e tenha especialistas cuidando do seu ambiente 24/7.",
      services: [
        "Terceirização de TI (Contrato Agili Mensal)",
        "Service Desk e Help Desk",
        "Monitoramento de Rede (NOC)",
        "Consultoria Estratégica de TI",
        "Inventário e Gestão de Ativos"
      ],
      image: "/images/team-support.jpg"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-foreground text-background py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-white">NOSSAS SOLUÇÕES</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Tecnologia de ponta a ponta. Organizamos nosso portfólio para resolver os desafios reais do seu negócio.
          </p>
        </div>
      </section>

      {/* Pillars List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-32">
          {pillars.map((pillar, index) => (
            <div key={pillar.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 border border-primary/20 z-0 group-hover:border-primary/50 transition-colors duration-500"></div>
                <div className="relative z-10 h-[400px] overflow-hidden bg-gray-100">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="mb-6">{pillar.icon}</div>
                <h2 className="font-display font-bold text-4xl mb-4 text-foreground">{pillar.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {pillar.description}
                </p>
                
                <div className="bg-gray-50 p-8 border border-border mb-8">
                  <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-primary">O que entregamos:</h4>
                  <ul className="space-y-4">
                    {pillar.services.map((service, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Button className="bg-foreground hover:bg-primary text-white h-12 px-8 text-sm uppercase tracking-widest font-bold rounded-none transition-colors group">
                    Solicitar Orçamento <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-gray-100 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Não sabe qual solução é ideal para você?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossos consultores podem realizar um diagnóstico completo da sua infraestrutura e recomendar o melhor caminho.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-white h-12 px-8 text-sm uppercase tracking-widest font-bold rounded-none">
              Falar com Consultor
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
