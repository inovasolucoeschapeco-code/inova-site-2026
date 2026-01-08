import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Shield, Server, Users, Zap, CheckCircle2, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const whatsappLink = "https://wa.me/554933193900";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-foreground text-background overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-infrastructure.jpg" 
            alt="Infraestrutura de TI Inova" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-transparent"></div>
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Parceira Estratégica B2B
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] mb-6 text-white tracking-tight">
              SUA EMPRESA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">MAIS PRODUTIVA</span> <br/>
              E SEGURA.
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed border-l-2 border-primary pl-6">
              Deixe a complexidade da TI com a gente. Somos uma integradora de soluções que cuida da sua infraestrutura, segurança e suporte para que você foque apenas no crescimento do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-sm uppercase tracking-widest font-bold rounded-none border border-transparent hover:border-white/20 transition-all">
                  Falar com Consultor
                </Button>
              </a>
              <Link href="/solucoes">
                <Button variant="outline" className="h-14 px-8 text-sm uppercase tracking-widest font-bold rounded-none border-white/20 text-white hover:bg-white hover:text-foreground transition-all">
                  Conhecer Soluções
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "33+", label: "Anos de Experiência" },
              { number: "2.500+", label: "Projetos Entregues" },
              { number: "50+", label: "Especialistas" },
              { number: "24/7", label: "Suporte Técnico" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left border-l border-white/20 pl-6">
                <div className="font-display font-bold text-4xl md:text-5xl text-white mb-1">{stat.number}</div>
                <div className="text-white/80 text-xs uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section - The Core Transformation */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 md:flex justify-between items-end border-b border-border pb-8">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">NOSSOS PILARES</h2>
              <p className="text-muted-foreground max-w-xl text-lg">
                Organizamos nossa expertise em 4 áreas fundamentais para garantir que sua tecnologia impulsione seu negócio, não o contrário.
              </p>
            </div>
            <Link href="/solucoes">
              <Button variant="link" className="text-primary font-bold uppercase tracking-widest group p-0 mt-4 md:mt-0">
                Ver todas as soluções <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pilar 1 */}
            <div className="group relative bg-white border border-border hover:border-primary transition-colors duration-300 h-full flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/hero-infrastructure.jpg" alt="Infraestrutura" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-border">
                  Infraestrutura
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <Server className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">Infraestrutura Confiável</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Construímos a base sólida para sua operação não parar. Do cabeamento estruturado ao datacenter, garantimos performance e estabilidade.
                </p>
                <ul className="space-y-2 mb-8 border-t border-border pt-6">
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Cabeamento Estruturado</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Redes Wi-Fi Corporativas</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Servidores e Storages</li>
                </ul>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full border-border hover:border-primary hover:text-primary uppercase text-xs font-bold tracking-widest rounded-none">Solicitar Orçamento</Button>
                </a>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="group relative bg-white border border-border hover:border-primary transition-colors duration-300 h-full flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/security-shield.jpg" alt="Segurança" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-border">
                  Segurança
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <Shield className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">Segurança Digital Total</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Proteja seus dados contra ameaças e garanta a continuidade do negócio. Soluções proativas de defesa cibernética.
                </p>
                <ul className="space-y-2 mb-8 border-t border-border pt-6">
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Firewall como Serviço</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Cloud Backup</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> CFTV e Controle de Acesso</li>
                </ul>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full border-border hover:border-primary hover:text-primary uppercase text-xs font-bold tracking-widest rounded-none">Solicitar Orçamento</Button>
                </a>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="group relative bg-white border border-border hover:border-primary transition-colors duration-300 h-full flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/productivity-office.jpg" alt="Produtividade" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-border">
                  Produtividade
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <Zap className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">Produtividade Corporativa</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Equipe sua equipe com as melhores ferramentas. Hardware e software licenciados para máxima eficiência operacional.
                </p>
                <ul className="space-y-2 mb-8 border-t border-border pt-6">
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Licenciamento Microsoft/Adobe</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Venda de Desktops e Notebooks</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Videoconferência</li>
                </ul>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full border-border hover:border-primary hover:text-primary uppercase text-xs font-bold tracking-widest rounded-none">Solicitar Orçamento</Button>
                </a>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="group relative bg-white border border-border hover:border-primary transition-colors duration-300 h-full flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/team-support.jpg" alt="Suporte" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-border">
                  Suporte
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <Users className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">Gestão e Suporte de TI</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Sua equipe de TI dedicada, sem os custos internos. Monitoramento proativo e resolução rápida de problemas.
                </p>
                <ul className="space-y-2 mb-8 border-t border-border pt-6">
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Terceirização de TI (Agili)</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Suporte Técnico Dedicado</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Monitoramento de Rede</li>
                </ul>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full border-border hover:border-primary hover:text-primary uppercase text-xs font-bold tracking-widest rounded-none">Solicitar Orçamento</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recurrence Focus Section */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 border border-primary text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Terceirização de TI
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
                POR QUE TERCEIRIZAR <br/> SUA TI COM A INOVA?
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Empresas que terceirizam a TI reduzem custos operacionais em até 30% e aumentam a eficiência. Com o plano <strong>Agili Mensal</strong>, você tem previsibilidade de custos e garantia de SLA.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Redução de Custos</h4>
                    <p className="text-gray-500 text-sm">Elimine custos com contratação, treinamento e encargos trabalhistas de equipe interna.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Segurança Proativa</h4>
                    <p className="text-gray-500 text-sm">Monitoramento 24/7 que identifica e resolve problemas antes que eles parem sua operação.</p>
                  </div>
                </div>
              </div>

              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <Button className="mt-10 bg-primary hover:bg-primary/90 text-white h-12 px-8 text-sm uppercase tracking-widest font-bold rounded-none">
                  Falar com Consultor
                </Button>
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="relative bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                <h3 className="font-display font-bold text-2xl text-white mb-6 border-b border-white/10 pb-4">
                  O que está incluso no Agili?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Suporte Remoto e Presencial Ilimitado",
                    "Gestão de Backup em Nuvem",
                    "Monitoramento de Servidores 24/7",
                    "Gestão de Antivírus e Firewall",
                    "Consultoria para Melhorias de TI",
                    "Relatórios Mensais de Performance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-12 text-foreground">EMPRESAS QUE CONFIAM NA INOVA</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Logos reais dos clientes */}
            {[
              { nome: "DASS", logo: "/logos/dass.jpg" },
              { nome: "Aurora Alimentos", logo: "/logos/aurora.png" },
              { nome: "Medchap", logo: "/logos/medchap.jpg" },
              { nome: "Kellanova", logo: "/logos/kellanova.png" },
              { nome: "Santa Pedra VW", logo: "/logos/santapedra.png" },
              { nome: "Irani S/A", logo: "/logos/irani.png" }
            ].map((cliente, i) => (
              <div key={i} className="h-24 bg-white flex items-center justify-center border border-border hover:border-primary transition-colors p-4 group">
                <img 
                  src={cliente.logo} 
                  alt={cliente.nome} 
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 border border-border relative">
              <div className="text-primary text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
              <p className="text-lg text-muted-foreground mb-6 relative z-10 italic">
                Fomos muito bem recepcionados desde o primeiro contato. A atenção e disponibilidade em contribuir com nosso crescimento sempre estiveram presentes em nossa parceria. Com ajuda da Inova nosso TI conseguiu se tornar referência no setor de medicamentos.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">EP</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Eduardo Pretto</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Gestor de TI - Medchap</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-border relative">
              <div className="text-primary text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
              <p className="text-lg text-muted-foreground mb-6 relative z-10 italic">
                Temos uma relação comercial de longa data com a Inova Soluções Tecnológicas, sempre com atendimento imediato, seguro e eficiente. Gostamos de interagir e de aprender com nossos fornecedores e a Inova transfere todas essas facilidades.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">DE</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Deirudi Ecco</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Gerência de TI - Supermercado Celeiro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight">
            PRONTO PARA EVOLUIR SUA TI?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Agende um diagnóstico gratuito e descubra como podemos otimizar sua infraestrutura e reduzir custos.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="bg-white text-primary hover:bg-gray-100 h-16 px-10 text-base uppercase tracking-widest font-bold rounded-none">
              Falar com Consultor
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
