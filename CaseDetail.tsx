import Layout from "@/components/Layout";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";
import { useParams } from "wouter";
import { Button } from "@/components/ui/button";

export default function CaseDetail() {
  const params = useParams();
  const caseId = params.id;
  const whatsappLink = "https://wa.me/554933193900";

  const casesData: Record<string, any> = {
    "unochapeco": {
      client: "UNOCHAPECÓ",
      location: "Chapecó - SC",
      title: "Modernização da Rede Wi-Fi com HP Aruba",
      description: "Projeto de modernização da rede Wi-Fi com solução HP Aruba, incluindo 113 switches de distribuição, 354 Access Points, ferramenta de gerenciamento AirWave e sistema de localização integrado ao app Minha Uno. A Universidade Comunitária da Região de Chapecó conta com milhares de alunos e colaboradores que dependem de conectividade de alta qualidade.",
      result: "Melhoria significativa na qualidade do sinal e performance da rede Wi-Fi, aplicação de políticas de acesso, segurança na autenticação, melhor gerenciamento e monitoramento, controle de acesso a visitantes e serviços de localização integrados.",
      tags: ["Wi-Fi Corporativo", "HP Aruba", "Smart Campus", "Infraestrutura de Rede"],
      image: "/images/hero-infrastructure.jpg",
      details: "A Universidade Comunitária da Região de Chapecó (Unochapecó) é uma instituição de ensino superior com grande demanda de conectividade. Com milhares de alunos e colaboradores utilizando a rede Wi-Fi diariamente, a solução precisava ser robusta e escalável.\n\nA Inova implementou uma solução completa com HP Aruba que incluiu:\n\n• 113 switches de distribuição para cobertura total\n• 354 Access Points estrategicamente posicionados\n• Ferramenta de gerenciamento AirWave para monitoramento centralizado\n• Sistema de localização integrado ao app Minha Uno\n\nO resultado foi uma rede Wi-Fi de alta performance, segura e fácil de gerenciar, permitindo que a universidade ofereça melhor experiência aos seus usuários."
    },
    "celeiro": {
      client: "CELEIRO",
      location: "Chapecó - SC",
      title: "Reestruturação Completa de TI com Alta Disponibilidade",
      description: "O supermercado Celeiro, presente na vida das famílias chapecoenses desde a década de 70, investiu em uma nova infraestrutura de servidores, licenciamento e monitoramento. A Inova desenhou uma solução de alta disponibilidade com virtualização VMWARE, 3 servidores HPE de alta performance e Storage HPE MSA 2040 com conexão em fibra óptica.",
      result: "Aumento na segurança, gerenciamento e monitoramento eficiente, agilidade nos processos e atendimento aos clientes, modernização completa da infraestrutura de TI.",
      tags: ["Virtualização", "Servidores HPE", "Backup Veeam", "Infraestrutura de TI"],
      image: "/images/productivity-office.jpg",
      details: "O Supermercado Celeiro é uma instituição importante na comunidade chapecoense há mais de 50 anos. Com a modernização do varejo, a empresa precisava de uma infraestrutura de TI robusta e confiável.\n\nA Inova implementou:\n\n• Virtualização VMWARE para melhor aproveitamento de recursos\n• 3 servidores HPE de alta performance\n• Storage HPE MSA 2040 com conexão em fibra óptica\n• Backup e monitoramento 24/7\n\nA solução garantiu alta disponibilidade dos sistemas, reduzindo riscos de parada operacional e melhorando a eficiência dos processos."
    },
    "sicoob-credicaru": {
      client: "SICOOB CREDICARÚ",
      location: "São José do Cerrito - SC",
      title: "Cloud Backup e Replicação de Alta Disponibilidade",
      description: "A Sicoob Credicarú, com nove pontos de atendimento em SC e RS, adquiriu uma solução de Cloud Backup e posteriormente uma solução de replicação para alta disponibilidade. O backup de 4 servidores virtuais (480 GB) é transferido para o ambiente Inova Cloud Backup e replicado a cada hora em servidor HPE local.",
      result: "Aumento na segurança, alta disponibilidade de dados, agilidade na recuperação, gerenciamento e monitoramento constante, eliminação do risco de transporte de discos físicos.",
      tags: ["Cloud Backup", "Alta Disponibilidade", "Replicação", "Segurança de Dados"],
      image: "/images/security-shield.jpg",
      details: "A Sicoob Credicarú é uma cooperativa de crédito com presença em múltiplos estados. A segurança e disponibilidade dos dados são críticas para suas operações.\n\nA Inova implementou:\n\n• Cloud Backup com replicação automática\n• Backup de 4 servidores virtuais (480 GB)\n• Replicação a cada hora em servidor HPE local\n• Monitoramento 24/7 e alertas automáticos\n\nA solução eliminou o risco de transporte de discos físicos e garantiu que os dados estejam sempre protegidos e disponíveis para recuperação rápida."
    },
    "cia-canoinhas": {
      client: "CIA CANOINHAS",
      location: "Canoinhas - SC",
      title: "Projeto de Segurança CFTV com Câmeras IP",
      description: "A Cia Canoinhas de Papel, uma das maiores empresas de SC no ramo de papéis descartáveis com mais de 620 colaboradores, implementou um projeto de segurança (CFTV) com 40 câmeras IPs de alta resolução, servidor HPE com software Digifort e sala de monitoramento com tela full HD.",
      result: "Centralização do monitoramento em sala específica, aumento na segurança patrimonial e do trabalho, agilidade na identificação de ocorrências e resolução de problemas na área de segurança.",
      tags: ["CFTV", "Segurança", "Monitoramento", "Câmeras IP"],
      image: "/images/team-support.jpg",
      details: "A Cia Canoinhas de Papel é uma empresa de grande porte com operações complexas e necessidade de segurança patrimonial elevada.\n\nA Inova implementou:\n\n• 40 câmeras IPs de alta resolução\n• Servidor HPE com software Digifort\n• Sala de monitoramento com tela full HD\n• Sistema de gravação com redundância\n\nO projeto centralizou o monitoramento, aumentou a segurança patrimonial e permitiu resposta rápida a incidentes."
    },
    "medchap": {
      client: "MEDCHAP",
      location: "Chapecó - SC",
      title: "Parceria Completa de TI desde 2016",
      description: "A Medchap, uma das maiores distribuidoras de Medicamentos Similares de SC, iniciou parceria com a Inova em 2016 para implementar Firewall. Desde então, diversas soluções foram implantadas: servidores, licenciamento de softwares (Microsoft, Veeam, Kaspersky), Cloud Backup, data center, links de fibra, cabeamento e switches.",
      result: "Equipamentos integrados para segurança e disponibilidade, backup seguro e protegido, armazenamento de dados seguros. O TI Medchap tornou-se referência no segmento de medicamentos.",
      tags: ["Firewall", "Cloud Backup", "Licenciamento", "Infraestrutura Completa"],
      image: "/images/hero-infrastructure.jpg",
      details: "A Medchap é uma das maiores distribuidoras de medicamentos similares de Santa Catarina, com operações críticas que dependem de TI confiável.\n\nDesde 2016, a Inova é parceira estratégica implementando:\n\n• Firewall de segurança\n• Servidores e virtualização\n• Licenciamento Microsoft, Veeam e Kaspersky\n• Cloud Backup e data center\n• Links de fibra óptica\n• Cabeamento estruturado e switches\n\nA parceria de longa data consolidou o TI Medchap como referência no segmento de medicamentos."
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
      {/* Header */}
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

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Image */}
            <div className="lg:col-span-1">
              <img 
                src={caseData.image} 
                alt={caseData.title}
                className="w-full h-64 lg:h-96 object-cover rounded-lg border border-border"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Sobre o Projeto</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
                  {caseData.details}
                </p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-primary mb-8 rounded">
                <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">Resultado</span>
                <p className="font-medium text-foreground">{caseData.result}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {caseData.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-gray-100 text-xs font-medium text-gray-600 uppercase tracking-wider rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-sm uppercase tracking-widest font-bold rounded-none">
                    Falar com Consultor <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Quer uma solução similar?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita com nossos especialistas e descubra como podemos transformar sua infraestrutura de TI.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-sm uppercase tracking-widest font-bold rounded-none">
              Falar com Consultor <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
