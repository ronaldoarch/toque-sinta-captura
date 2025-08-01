import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Toque e Sinta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Desperte sua sensualidade através da arte da massagem tântrica
          </p>
        </div>
        
        <div className="relative mb-12 animate-slide-up">
          <div className="aspect-video bg-gradient-earth rounded-2xl shadow-soft overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-black/10 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-golden rounded-full flex items-center justify-center mb-4 mx-auto shadow-golden">
                  <Play className="text-white ml-1" size={32} />
                </div>
                <p className="text-white text-lg font-medium">
                  Aula Gratuita - 45 minutos
                </p>
                <p className="text-white/80 text-sm mt-2">
                  "Os Fundamentos da Conexão Tântrica"
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center animate-slide-up">
          <Button variant="cta" size="lg" className="mb-6">
            Quero Acesso Ao Curso Completo
          </Button>
          <p className="text-sm text-muted-foreground">
            ✨ Mais de 10 horas de conteúdo exclusivo
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;