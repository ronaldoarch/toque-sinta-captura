import { Button } from "@/components/ui/button";
import { Clock, Shield, Gift } from "lucide-react";
const FinalCTASection = () => {
  return <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforme Sua Vida Hoje
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Não deixe para depois. Sua jornada de transformação e descoberta 
            pode começar agora mesmo.
          </p>
        </div>

        

        <div className="text-center animate-slide-up">
          <p className="text-lg text-muted-foreground mb-4">
            "O primeiro passo para a transformação é a decisão de começar."
          </p>
          
        </div>
      </div>
    </section>;
};
export default FinalCTASection;