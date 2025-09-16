import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import LeadCaptureModal from "./LeadCaptureModal";
const CourseInfoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Você Vai Aprender
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um curso completo que vai te ensinar desde os fundamentos até as técnicas 
            mais avançadas da massagem tântrica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-slide-up">
            <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={28} />
            </div>
            <h3 className="font-semibold text-lg mb-2">10+ Horas</h3>
            <p className="text-muted-foreground">de conteúdo exclusivo</p>
          </div>
          
          <div className="text-center animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="font-semibold text-lg mb-2">2000+</h3>
            <p className="text-muted-foreground">alunos transformados</p>
          </div>
          
          <div className="text-center animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={28} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Certificado</h3>
            <p className="text-muted-foreground">de conclusão</p>
          </div>
          
          <div className="text-center animate-slide-up" style={{
          animationDelay: '0.3s'
        }}>
            <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-white" size={28} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Garantia</h3>
            <p className="text-muted-foreground">7 dias ou seu dinheiro de volta</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          
          <div className="animate-slide-up bg-card p-8 rounded-2xl shadow-soft">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-6">
              Bônus Exclusivos
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-golden pl-4">
                <h4 className="font-semibold text-foreground mb-2">E-book "Redescobrir"</h4>
                <p className="text-muted-foreground text-sm">
                  Guia completo para fortalecer vínculos através do toque
                </p>
              </div>
              
              <div className="border-l-4 border-golden pl-4">
                <h4 className="font-semibold text-foreground mb-2">Acesso ao Grupo VIP</h4>
                <p className="text-muted-foreground text-sm">
                  Comunidade exclusiva com suporte direto da Naira
                </p>
              </div>
              
              <div className="border-l-4 border-golden pl-4">
                <h4 className="font-semibold text-foreground mb-2">Aulas diversificadas</h4>
                <p className="text-muted-foreground text-sm">aulas com técnicas diferentes, e profissionais diferentes todo mês .</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in">
          <Button variant="cta" size="lg" className="mb-4" onClick={() => setIsModalOpen(true)}>
            Entrar no Grupo VIP
          </Button>
          <p className="text-sm text-muted-foreground">
            ✨ Acesso exclusivo ao grupo da comunidade
          </p>
        </div>
      </div>
      
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>;
};
export default CourseInfoSection;