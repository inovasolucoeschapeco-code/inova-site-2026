import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ShoppingCart, Handshake, GraduationCap, Factory, Users } from "lucide-react";

export default function Clientes() {
  const whatsappLink = "https://wa.me/554933193900";

  // Gerar array de logos (116 logos baixadas)
  const totalLogos = 116;
  const logos = Array.from({ length: totalLogos }, (_, i) => `/clientes/logo_${String(i + 1).padStart(3, '0')}.png`);

  // Setores de atuação (sem números)
  const setores = [
    { nome: "Comércio e Distribuição", icone: ShoppingCart, descricao: "Atacado, varejo e serviços" },
    { nome: "Cooperativas e Financeiro", icone: Handshake, descricao: "Cooperativas de crédito e agronegócio" },
    { nome: "Educação", icone: GraduationCap, descricao: "Universidades e instituições de ensino" },
    { nome: "Indústria", icone: Factory, descricao: "Manufatura e produção" },
  ];

  return (
    <Layout>
      {/* Header da Página */}
      <section className="bg-foreground text-background py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-white">NOSSOS CLIENTES</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Empresas que confiam na Inova para cuidar da sua tecnologia. Parcerias de sucesso construídas ao longo de mais de 30 anos.
          </p>
        </div>
      </section>

      {/* Grid de Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="bg-gray-50 border border-gray-100 p-6 flex items-center justify-center aspect-square hover:border-primary hover:shadow-md transition-all group"
              >
                <img 
                  src={logo} 
                  alt={`Cliente ${index + 1}`}
                  className="max-h-16 md:max-h-20 lg:max-h-24 w-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  onError={(e) => {
                    // Esconder se a imagem não carregar
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setores de Atuação - Sem números */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl mb-6 text-center">SETORES QUE ATENDEMOS</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Nossa expertise abrange diversos segmentos de mercado, sempre com soluções personalizadas para cada necessidade.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {setores.map((setor, index) => (
              <div key={index} className="bg-white border border-border p-8 text-center hover:border-primary transition-colors group">
                <setor.icone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{setor.nome}</h3>
                <p className="text-sm text-muted-foreground">{setor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 p-8 md:p-12 border border-border">
            <div className="text-6xl text-primary mb-6">"</div>
            <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
              Fomos muito bem recepcionados desde o primeiro contato. A atenção e disponibilidade em contribuir com nosso crescimento sempre estiveram presentes em nossa parceria. Com ajuda da Inova nosso TI conseguiu se tornar referência no setor.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold">Eduardo Pretto</div>
                <div className="text-sm text-muted-foreground">Gestor de TI - Medchap</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">FAÇA PARTE DA NOSSA LISTA DE CLIENTES</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Junte-se a centenas de empresas que confiam na Inova para cuidar da sua tecnologia.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest px-8 py-6 rounded-none">
              Falar com Consultor
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
