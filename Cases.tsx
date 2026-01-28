import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Quote, ExternalLink } from "lucide-react";

export default function Cases() {
  const whatsappLink = "https://wa.me/554933193900";

  const cases = [
    {
      client: "UNOCHAPECÓ",
      location: "Chapecó - SC",
      title: "Modernização da Rede Wi-Fi com HP Aruba",
      description: "Projeto de modernização da rede Wi-Fi com solução HP Aruba, incluindo 113 switches de distribuição, 354 Access Points, ferramenta de gerenciamento AirWave e sistema de localização integrado ao app Minha Uno. A Universidade Comunitária da Região de Chapecó conta com milhares de alunos e colaboradores que dependem de conectividade de alta qualidade.",
      result: "Melhoria significativa na qualidade do sinal e performance da rede Wi-Fi, aplicação de políticas de acesso, segurança na autenticação, melhor gerenciamento e monitoramento, controle de acesso a visitantes e serviços de localização integrados.",
      tags: ["Wi-Fi Corporativo", "HP Aruba", "Smart Campus", "Infraestrutura de Rede"],
      image: "/images/hero-infrastructure.jpg",
      caseUrl: "/case-detail/unochapeco"
    },
    {
      client: "CELEIRO",
      location: "Chapecó - SC",
      title: "Reestruturação Completa de TI com Alta Disponibilidade",
      description: "O supermercado Celeiro, presente na vida das famílias chapecoenses desde a década de 70, investiu em uma nova infraestrutura de servidores, licenciamento e monitoramento. A Inova desenhou uma solução de alta disponibilidade com virtualização VMWARE, 3 servidores HPE de alta performance e Storage HPE MSA 2040 com conexão em fibra óptica.",
      result: "Aumento na segurança, gerenciamento e monitoramento eficiente, agilidade nos processos e atendimento aos clientes, modernização completa da infraestrutura de TI.",
      tags: ["Virtualização", "Servidores HPE", "Backup Veeam", "Infraestrutura de TI"],
      image: "/images/productivity-office.jpg",
      caseUrl: "/case-detail/celeiro"
    },
    {
      client: "SICOOB CREDICARÚ",
      location: "São José do Cerrito - SC",
      title: "Cloud Backup e Replicação de Alta Disponibilidade",
      description: "A Sicoob Credicarú, com nove pontos de atendimento em SC e RS, adquiriu uma solução de Cloud Backup e posteriormente uma solução de replicação para alta disponibilidade. O backup de 4 servidores virtuais (480 GB) é transferido para o ambiente Inova Cloud Backup e replicado a cada hora em servidor HPE local.",
      result: "Aumento na segurança, alta disponibilidade de dados, agilidade na recuperação, gerenciamento e monitoramento constante, eliminação do risco de transporte de discos físicos.",
      tags: ["Cloud Backup", "Alta Disponibilidade", "Replicação", "Segurança de Dados"],
      image: "/images/security-shield.jpg",
      caseUrl: "/case-detail/sicoob-credicaru"
    },
    {
      client: "CIA CANOINHAS",
      location: "Canoinhas - SC",
      title: "Projeto de Segurança CFTV com Câmeras IP",
      description: "A Cia Canoinhas de Papel, uma das maiores empresas de SC no ramo de papéis descartáveis com mais de 620 colaboradores, implementou um projeto de segurança (CFTV) com 40 câmeras IPs de alta resolução, servidor HPE com software Digifort e sala de monitoramento com tela full HD.",
      result: "Centralização do monitoramento em sala específica, aumento na segurança patrimonial e do trabalho, agilidade na identificação de ocorrências e resolução de problemas na área de segurança.",
      tags: ["CFTV", "Segurança", "Monitoramento", "Câmeras IP"],
      image: "/images/team-support.jpg",
      caseUrl: "/case-detail/cia-canoinhas"
    },
    {
      client: "MEDCHAP",
      location: "Chapecó - SC",
      title: "Parceria Completa de TI desde 2016",
      description: "A Medchap, uma das maiores distribuidoras de Medicamentos Similares de SC, iniciou parceria com a Inova em 2016 para implementar Firewall. Desde então, diversas soluções foram implantadas: servidores, licenciamento de softwares (Microsoft, Veeam, Kaspersky), Cloud Backup, data center, links de fibra, cabeamento e switches.",
      result: "Equipamentos integrados para segurança e disponibilidade, backup seguro e protegido, armazenamento de dados seguros. O TI Medchap tornou-se referência no segmento de medicamentos.",
      tags: ["Firewall", "Cloud Backup", "Licenciamento", "Infraestrutura Completa"],
      image: "/images/hero-infrastructure.jpg",
      caseUrl: "/case-detail/medchap"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-foreground text-background py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-white">CASES DE SUCESSO</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Resultados reais. Veja como transformamos a tecnologia de grandes empresas da região Sul do Brasil.
          </p>
        </div>
      </section>

      {/* Cases List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {cases.map((item, index) => (
              <div key={index} className="group border border-border bg-white hover:border-primary transition-colors duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-primary font-bold uppercase tracking-widest text-xs">{item.client}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-muted-foreground text-xs uppercase tracking-widest">{item.location}</span>
                    </div>
                    
                    <h3 className="font-display font-bold text-3xl mb-4 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="bg-gray-50 p-6 border-l-4 border-primary mb-8">
                      <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Resultado</span>
                      <p className="font-medium text-foreground">{item.result}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-600 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a href={item.caseUrl}>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white h-12 px-6 text-sm uppercase tracking-widest font-bold rounded-none">
                          Ver Case na Íntegra <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </a>
                      <a href={whatsappLink} target="_blank" rel="noreferrer">
                        <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-6 text-sm uppercase tracking-widest font-bold rounded-none">
                          Falar com Consultor <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Quote className="w-16 h-16 text-white/30 mx-auto mb-8" />
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-10 max-w-4xl mx-auto leading-tight">
            "Temos uma relação comercial de longa data com a Inova, sempre com atendimento imediato, seguro e eficiente. Gostamos de interagir e de aprender com nossos fornecedores e a Inova transfere todas essas facilidades."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mb-4"></div>
            <div className="font-bold text-lg">Deirudi Ecco</div>
            <div className="text-white/60 text-sm uppercase tracking-widest">Gerência de TI - Supermercado Celeiro</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Quer resultados como esses para sua empresa?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar a tecnologia do seu negócio.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-sm uppercase tracking-widest font-bold rounded-none">
              Falar com Consultor
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
