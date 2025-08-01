import { Button } from "@/components/ui/button";
import { Clock, Shield, Gift } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
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

        <div className="bg-card p-8 rounded-2xl shadow-golden border border-golden/20 mb-12 animate-slide-up">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Oferta por Tempo Limitado</h3>
              <p className="text-sm text-muted-foreground">Últimas 48 horas com desconto especial</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Garantia Total</h3>
              <p className="text-sm text-muted-foreground">30 dias para testar ou seu dinheiro de volta</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Bônus Exclusivos</h3>
              <p className="text-sm text-muted-foreground">Conteúdos extras no valor de R$ 497</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="mb-6">
              <span className="text-3xl text-muted-foreground line-through">De R$ 997</span>
              <span className="text-5xl font-bold text-golden ml-4">R$ 497</span>
            </div>
            
            <Button variant="cta" size="lg" className="mb-4 text-xl py-8 px-12">
              Garantir Minha Vaga Agora
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⚡ Processamento seguro • 💳 Parcelamento em até 12x
            </p>
          </div>
        </div>

        <div className="text-center animate-slide-up">
          <p className="text-lg text-muted-foreground mb-4">
            "O primeiro passo para a transformação é a decisão de começar."
          </p>
          <p className="font-medium text-foreground">
            - Naira Lira
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;