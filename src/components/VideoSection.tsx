import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import LeadCaptureModal from "./LeadCaptureModal";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              poster=""
              preload="metadata"
            >
              <source src="/videos/aula-gratuita-toque-sinta.mp4" type="video/mp4" />
              <p className="text-white p-4">
                Seu navegador não suporta o elemento de vídeo.
              </p>
            </video>
          </div>
        </div>
        
        <div className="text-center animate-slide-up">
          <Button variant="cta" size="lg" className="mb-6" onClick={() => setIsModalOpen(true)}>
            Entrar no Grupo VIP
          </Button>
          <p className="text-sm text-muted-foreground">
            ✨ Mais de 10 horas de conteúdo exclusivo
          </p>
        </div>
      </div>
      
      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default VideoSection;