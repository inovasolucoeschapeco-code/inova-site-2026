import Layout from "@/components/Layout";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

export default function CaseDetail() {
  const params = useParams();
  const caseId = params.id;
  const { openLeadModal } = useLeadCapture();

  const casesData: Record<string, any> = {
    "unochapeco": {
      client: "UNOCHAPECÓ",
      location: "Chapecó - SC",
      title: "Modernização da Rede Wi-Fi com HP Aruba",
      result: "Melhoria significativa na qualidade do sinal e performance da rede Wi-Fi, aplicação de políticas de acesso, segurança na autenticação, melhor gerenciamento e monitoramento.",
      tags: ["Wi-Fi Corporativo", "HP Aruba", "Smart Campus", "Infraestrutura de Rede"],
      image: "/images/hero-infrastructure.jpg",
      details: "A Universidade Comunitária da Região de Chapecó (Unochapecó) é uma instituição de ensino superior com grande demanda de conectividade.\n\nA Inova implementou uma solução completa com HP Aruba que incluiu:\n\n• 113 switches de distribuição para cobertura total\n• 354 Access Points estrategicamente posicionados\n• Ferramenta de gerenciamento AirWave para monitoramento centralizado\n• Sistema de localização integrado ao app Minha Uno"
    },
    "cia-canoinhas": {
      client: "CIA CANOINHAS",
      location: "Canoinhas - SC",
      title: "Projeto de Segurança CFTV com Câmeras IP",
      result: "Centralização do monitoramento em sala específica, aumento na segurança patrimonial e do trabalho.",
      tags: ["CFTV", "Segurança", "Monitoramento", "Câmeras IP"],
      image: "/images/team-support.jpg",
      details: "A Cia Canoinhas de Papel é uma empresa de grande porte com operações complexas.\n\nA Inova implementou:\n\n• 40 câmeras IPs de alta resolução\n• Servidor HPE com software Digifort\n• Sala de monitoramento com tela full HD\n• Sistema de gravação com redundância"
    },
    "dass": {
      client: "DASS",
      location: "Nacional - Brasil",
      title: "Refresh de rede de todas as unidades do Brasil com Solução HPE Networking",
      result: "Eliminação de gargalos de conectividade em todas as plantas industriais e escritórios.",
      tags: ["HPE Networking", "Wi-Fi 6E", "Switches CX", "Aruba Central"],
      image: "/images/dass-case.png",
      details: "O Grupo Dass modernizou sua infraestrutura de rede (LAN e WLAN) em 10 unidades no Brasil.\n\nA Inova, em parceria com a Sercompe, implementou:\n\n• Access Points Wi-Fi 6E\n• Switches CX de alta disponibilidade\n• Gerenciamento unificado em nuvem via Aruba Central com AIOps"
    },
    "rotesma": {
      client: "ROTESMA",
      location: "Chapecó - SC",
      title: "Infraestrutura Completa para o Novo Centro Administrativo",
      result: "Ambiente corporativo de altíssima performance e disponibilidade.",
      tags: ["Cabeamento Estruturado", "Data Center", "Wi-Fi 6", "Energia Estabilizada"],
      image: "/images/rotesma-case.png",
      details: "Para suportar as operações do novo Centro Administrativo em Chapecó, a Rotesma contou com a Inova.\n\nO projeto englobou:\n\n• Mais de 250 pontos de rede com cabeamento Cat6A Blindado (10G)\n• Instalação de piso elevado para o Data Center\n• Sistema de energia estabilizada com nobreaks\n• Rede Wi-Fi 6 de alta densidade\n• Controle de acesso biométrico"
    },
    "irani-mp5": {
      client: "IRANI S.A.",
      location: "Vargem Bonita - SC",
      title: "Infraestrutura de Redes e Automação para a Máquina de Papel nº 5",
      result: "Confiabilidade extrema com topologia em anel óptico e certificação de 100% dos pontos.",
      tags: ["Automação Industrial", "Fibra Óptica", "Infraestrutura de Rede", "Projeto Gaia"],
      image: "/images/irani-mp5-case.png",
      details: "A Irani Papel e Embalagem S.A. confiou à Inova o projeto e execução de toda a infraestrutura de redes corporativas (T.I.) e de automação industrial (T.A.) para a modernização da Máquina de Papel nº 5 (MP#5), dentro do Projeto Gaia XI."
    }
  };

  const caseData = casesData[caseId || ""];

  if (!caseData) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Case não encontrado</h1>
            <p className="text-muted-foreground mb-8">Desculpe, o case que você procura não existe.</p>
            <a href="/cases">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar para Cases
              </Button>
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-foreground text-background py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <a href="/cases" className="inline-flex items-center gap-2 text-primary mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Cases
          </a>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-white">{caseData.title}</h1>
          <div className="flex items-center gap-4">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">{caseData.client}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-400 text-sm uppercase tracking-widest">{caseData.location}</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <img src={caseData.image} alt={caseData.title} className="w-full h-64 lg:h-96 object-cover rounded-lg border border-border" />
            </div>
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Sobre o Projeto</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8">{caseData.details}</p>
              </div>
              <div className="bg-gray-50 p-8 border-l-4 border-primary mb-8 rounded">
                <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">Resultado</span>
                <p className="font-medium text-foreground">{caseData.result}</p>
              </div>
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {caseData.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-gray-100 text-xs font-medium text-gray-600 uppercase tracking-wider rounded">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => openLeadModal("Falar com Consultor")}
                  className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-sm uppercase tracking-widest font-bold rounded-none cursor-pointer"
                >
                  Falar com Consultor <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground text-background border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Quer uma solução similar?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita com nossos especialistas e descubra como podemos transformar sua infraestrutura de TI.
          </p>
          <Button 
            onClick={() => openLeadModal("Falar com Consultor")}
            className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-sm uppercase tracking-widest font-bold rounded-none cursor-pointer"
          >
            Falar com Consultor <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
