import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Target, Eye, Heart, Award, Users, Calendar, MapPin } from "lucide-react";

export default function Sobre() {
  const whatsappLink = "https://wa.me/554933193900";

  const valores = [
    "Satisfação dos clientes, colaboradores e parceiros",
    "Inovação e comprometimento",
    "Atitudes baseadas na ética",
    "Responsabilidade e agilidade"
  ];

  const timeline = [
    {
      year: "1992",
      title: "O Início",
      description: "Fundação da Tortelli Computadores Ltda em Chapecó, pelos empresários Valmir Tortelli e Fernando Picinini, que já trabalhavam com tecnologia em Lages-SC."
    },
    {
      year: "1998",
      title: "Nasce a Inova",
      description: "Sob nova diretoria de Mauricio Marin, Mauricio Pimenta e Sinara Perosa, é fundada a Inova Informática Ltda, dando continuidade ao trabalho iniciado."
    },
    {
      year: "2010",
      title: "Expansão Regional",
      description: "Consolidação como referência em soluções tecnológicas no Oeste Catarinense, atendendo empresas de pequeno, médio e grande porte."
    },
    {
      year: "Hoje",
      title: "33 Anos de Excelência",
      description: "Mais de 2.500 projetos entregues, 50+ especialistas e presença consolidada como parceira estratégica de tecnologia."
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-foreground text-background py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-white">SOBRE NÓS</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Somos uma empresa B2B especializada em gerar <strong className="text-white">soluções completas</strong> e <strong className="text-white">customizadas</strong> no mercado de tecnologia da informação.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 border border-primary text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Nossa História
              </div>
              <h2 className="font-display font-bold text-4xl mb-6 text-foreground">
                PIONEIROS NO OESTE <br/>CATARINENSE
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Nossa jornada iniciou em 1992, com a abertura da empresa Tortelli Computadores Ltda em Chapecó. Na época de propriedade do Sr. Valmir Tortelli e Fernando Picinini, empresários visionários que já trabalhavam com tecnologia na cidade de Lages-SC.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Fomos pioneiros e desbravamos o Oeste de Santa Catarina com muita vontade de aplicar as tecnologias que na época eram restritas às grandes cidades e que, aos poucos, passaram a ser por nós espalhadas no nosso mercado regional.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Em agosto de 1998, sob nova diretoria, Mauricio Marin, Mauricio Pimenta e Sinara Perosa fundaram a Inova Informática Ltda com o propósito de dar continuidade ao trabalho iniciado e de propagar cada vez mais a tecnologia e a inovação para toda nossa região.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-5 h-5" />
                  <span className="font-bold">33+ Anos</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold">Chapecó-SC</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  <span className="font-bold">50+ Especialistas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20"></div>
              <img 
                src="/images/hero-infrastructure.jpg" 
                alt="Sede Inova" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DNA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-4 text-foreground">TEMOS MUITO MAIS DO QUE TECNOLOGIA EM NOSSO DNA</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
            Com uma jornada de 30 anos aprimoramos a nossa expertise, entregamos excelentes resultados aos nossos clientes através de um bom atendimento, da orientação precisa, da execução de projetos com eficácia, fornecimento de equipamentos e materiais de primeira linha, instalação segura e o melhor suporte e assistência técnica.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4 text-foreground">MISSÃO</h3>
              <p className="text-muted-foreground italic">
                "Oferecer Soluções Tecnológicas, assegurando a satisfação de nossos clientes e solidez para a empresa."
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4 text-foreground">VISÃO</h3>
              <p className="text-muted-foreground italic">
                "Sermos referência como empresa de Soluções Tecnológicas."
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 border border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4 text-foreground">VALORES</h3>
              <ul className="text-muted-foreground text-left space-y-2">
                {valores.map((valor, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {valor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl mb-16 text-center text-white">NOSSA TRAJETÓRIA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-primary font-display font-bold text-5xl mb-4">{item.year}</div>
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-4 text-foreground">O SUCESSO DO CLIENTE É O QUE NOS MOVE</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            Buscamos as melhores práticas e ações com foco na qualidade da interação com nossos clientes. Garantimos com isso, uma experiência memorável para o cliente durante sua jornada de compra dos nossos produtos e serviços.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 border border-border hover:border-primary transition-colors">
              <Award className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Excelência</h4>
              <p className="text-muted-foreground text-sm">Entrega de projetos com eficácia e qualidade</p>
            </div>
            <div className="p-6 border border-border hover:border-primary transition-colors">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Atendimento</h4>
              <p className="text-muted-foreground text-sm">Orientação precisa e suporte dedicado</p>
            </div>
            <div className="p-6 border border-border hover:border-primary transition-colors">
              <Target className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Custo-Benefício</h4>
              <p className="text-muted-foreground text-sm">A melhor relação entre investimento e resultado</p>
            </div>
            <div className="p-6 border border-border hover:border-primary transition-colors">
              <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Parceria</h4>
              <p className="text-muted-foreground text-sm">Relacionamento de longo prazo com nossos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-4xl mb-6">VAMOS CONVERSAR?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Conheça nossa equipe e descubra como podemos ajudar sua empresa a crescer com tecnologia.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="bg-white text-primary hover:bg-gray-100 h-14 px-10 text-sm uppercase tracking-widest font-bold rounded-none">
              Falar com Consultor
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
