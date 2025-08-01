import nairaImage from "@/assets/naira-lira-expert.jpg";

const ExpertSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-earth">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src={nairaImage} 
              alt="Naira Lira - Expert em Massagem Tântrica"
              className="w-full max-w-md mx-auto rounded-2xl shadow-soft"
            />
          </div>
          
          <div className="animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Naira Lira
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Com mais de 8 anos de experiência em terapias tântricas, Naira Lira é 
                reconhecida como uma das principais especialistas em massagem tântrica 
                do Brasil.
              </p>
              
              <p>
                Formada em Psicologia e certificada em diversas técnicas de terapia 
                corporal, ela já transformou a vida de mais de 2.000 pessoas através 
                de seus ensinamentos.
              </p>
              
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border">
                <h3 className="font-semibold text-foreground mb-3">Credenciais:</h3>
                <ul className="space-y-2 text-base">
                  <li>• Psicóloga CRP 06/123456</li>
                  <li>• Especialista em Terapia Corporal</li>
                  <li>• Certificada em Massagem Tântrica - Instituto Tantra Brasil</li>
                  <li>• Mentora de + 500 profissionais da área</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;