import nairaImage from "@/assets/naira-lira-expert.jpg";
const ExpertSection = () => {
  return <section className="py-20 px-4 bg-gradient-earth">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img src={nairaImage} alt="Naira Lira - Expert em Massagem Tântrica" className="w-full max-w-md mx-auto rounded-2xl shadow-soft" />
          </div>
          
          <div className="animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Naira Lira
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              
              
              <p>✨ De Belém para o mundo, do pecado à celebração.
Nasci filha de pastor, cercada por culpas e proibições, mas foi no Yoga que meu corpo encontrou voz, e no Tantra que descobri um caminho de liberdade, prazer e cura.
Estudei e ensinei Yoga no Brasil, Holanda e Canadá, mergulhei no Tantra com mestres internacionais e fundei a Body Path, um espaço online para conectar pessoas em busca de transformação.
Hoje sou professora de Yoga, terapeuta Tântrica e mãe — aprendendo a cada dia que o corpo é o portal mais profundo de presença, entrega e celebração.

👉 Meu propósito é guiar você a transformar corpo e alma, em um caminho onde movimento vira silêncio e o toque se torna cura.</p>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ExpertSection;