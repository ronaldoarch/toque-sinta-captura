import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      age: 34,
      profession: "Terapeuta",
      text: "O curso da Naira transformou completamente minha prática profissional. Hoje atendo clientes do mundo todo e tenho uma agenda lotada. As técnicas ensinadas são revolucionárias!",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      age: 41,
      profession: "Empresário",
      text: "Fiz o curso para melhorar minha conexão com minha esposa. O resultado foi além das expectativas! Nossa intimidade alcançou um nível que nunca imaginamos possível.",
      rating: 5
    },
    {
      name: "Ana Beatriz",
      age: 28,
      profession: "Psicóloga",
      text: "Como profissional da área de saúde mental, posso afirmar que o conteúdo é de altíssima qualidade. Já incorporei várias técnicas em meus atendimentos com resultados incríveis.",
      rating: 5
    },
    {
      name: "Roberto Santos",
      age: 45,
      profession: "Massoterapeuta",
      text: "Trabalho com massagem há 15 anos e nunca vi um curso tão completo. A Naira tem uma didática excepcional e o material de apoio é fantástico. Recomendo a todos!",
      rating: 5
    },
    {
      name: "Juliana Costa",
      age: 32,
      profession: "Coach de Relacionamentos",
      text: "Fiz o curso para agregar valor aos meus atendimentos. Hoje ofereço um serviço diferenciado e meus clientes ficam encantados com os resultados. Valeu cada centavo!",
      rating: 5
    },
    {
      name: "Felipe Oliveira",
      age: 38,
      profession: "Arquiteto",
      text: "Sempre tive curiosidade sobre tantra, mas nunca soube por onde começar. O curso da Naira é perfeito para iniciantes. Aprendi muito e ainda estou aplicando os conhecimentos.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-earth">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 2.000 vidas transformadas através do poder da massagem tântrica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl shadow-soft border border-border animate-slide-up hover:shadow-golden transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <Quote className="text-golden mr-2" size={20} />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-golden fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground">
                  {testimonial.name}, {testimonial.age} anos
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.profession}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              Resultados Comprovados
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-golden mb-2">98%</div>
                <p className="text-muted-foreground">dos alunos relatam melhoria na intimidade</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-golden mb-2">500+</div>
                <p className="text-muted-foreground">profissionais formados e atuando</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-golden mb-2">4.9/5</div>
                <p className="text-muted-foreground">avaliação média dos alunos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;