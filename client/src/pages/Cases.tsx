import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

export default function Cases() {
  const { openLeadModal } = useLeadCapture();

  const cases = [
    {
      client: "UNOCHAPECÓ",
      location: "Chapecó - SC",
      title: "Modernização da Rede Wi-Fi com HP Aruba",
      description: "Projeto de modernização da rede Wi-Fi com solução HP Aruba, incluindo 113 switches de distribuição, 354 Access Points, ferramenta de gerenciamento AirWave e sistema de localização integrado ao app Minha Uno.",
      result: "Melhoria significativa na qualidade do sinal e performance da rede Wi-Fi.",
      tags: ["Wi-Fi Corporativo", "HP Aruba", "Smart Campus", "Infraestrutura de Rede"],
      image: "/images/unochapeco-case.png",
      caseUrl: "https://inovainfo.com.br/cases/unochapeco"
    },
    {
      client: "DASS",
      location: "Nacional - Brasil",
      title: "Refresh de rede de todas as unidades do Brasil com Solução HPE Networking",
      description: "O Grupo Dass modernizou sua infraestrutura de rede (LAN e WLAN) em 10 unidades no Brasil com Access Points Wi-Fi 6E, Switches CX e gerenciamento via Aruba Central com AIOps.",
      result: "Eliminação de gargalos de conectividade em todas as plantas industriais e escritórios.",
      tags: ["HPE Networking", "Wi-Fi 6E", "Switches CX", "Aruba Central"],
      image: "/images/dass-case.png",
      caseUrl: "https://inovainfo.com.br/cases/dass"
    },
    {
      client: "CIA CANOINHAS",
      location: "Canoinhas - SC",
      title: "Projeto de Segurança CFTV com Câmeras IP",
      description: "Implementação de projeto de segurança (CFTV) com 40 câmeras IPs de alta resolução, servidor HPE com software Digifort e sala de monitoramento.",
      result: "Centralização do monitoramento e aumento na segurança patrimonial.",
      tags: ["CFTV", "Segurança", "Monitoramento", "Câmeras IP"],
      image: "/images/cia-canoinhas-case.png",
      caseUrl: "https://inovainfo.com.br/cases/cia-canoinhas"
    },
    {
      client: "ROTESMA",
      location: "Chapecó - SC",
      title: "Infraestrutura Completa para o Novo Centro Administrativo",
      description: "Projeto de infraestrutura de TI de ponta a ponta com mais de 250 pontos de rede Cat6A Blindado (10G), Data Center, Wi-Fi 6 e controle de acesso biométrico.",
      result: "Ambiente corporativo de altíssima performance e disponibilidade.",
      tags: ["Cabeamento Estruturado", "Data Center", "Wi-Fi 6", "Energia Estabilizada"],
      image: "/images/rotesma-case.png",
      caseUrl: "https://inovainfo.com.br/cases/rotesma"
    },
    {
      client: "IRANI S.A.",
      location: "Vargem Bonita - SC",
      title: "Infraestrutura de Redes e Automação para a Máquina de Papel nº 5",
      description: "Projeto e execução de infraestrutura de redes corporativas (T.I.) e automação industrial (T.A.) para a Máquina de Papel nº 5 dentro do Projeto Gaia XI.",
      result: "Confiabilidade extrema com topologia em anel óptico e certificação de 100% dos pontos.",
      tags: ["Automação Industrial", "Fibra Óptica", "Infraestrutura de Rede", "Projeto Gaia"],
      image: "/images/irani-mp5-case.png",
      caseUrl: "https://inovainfo.com.br/cases/irani-mp5"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-foreground text-background py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-white">CASES DE SUCESSO</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Conheça projetos reais que transformaram a infraestrutura de nossos clientes.
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <div key={index} className="group bg-white border border-border hover:border-primary transition-colors duration-300 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-border">
                    {caseItem.client}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{caseItem.location}</span>
                  <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors">{caseItem.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{caseItem.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {caseItem.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-[10px] font-medium text-gray-600 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={caseItem.caseUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="w-full border-border hover:border-primary hover:text-primary uppercase text-xs font-bold tracking-widest rounded-none group">
                      Ver Case Completo <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-4xl mb-6">Quer um resultado assim para sua empresa?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Fale com nossos consultores e descubra como podemos transformar sua infraestrutura de TI.
          </p>
          <Button 
            onClick={() => openLeadModal("Falar com Consultor")}
            className="bg-white text-primary hover:bg-gray-100 h-14 px-10 text-sm uppercase tracking-widest font-bold rounded-none cursor-pointer"
          >
            Falar com Consultor
          </Button>
        </div>
      </section>
    </Layout>
  );
}
