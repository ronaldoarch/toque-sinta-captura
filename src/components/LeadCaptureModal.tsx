import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Save lead to database
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null
        }]);

      if (dbError) throw dbError;

      // Send ebook via email
      const { error: emailError } = await supabase.functions.invoke('send-ebook', {
        body: { 
          name: formData.name,
          email: formData.email 
        }
      });

      if (emailError) throw emailError;

      toast({
        title: "Sucesso!",
        description: "E-book enviado para seu email. Redirecionando para o WhatsApp...",
      });

      // Reset form and close modal
      setFormData({ name: "", email: "", phone: "" });
      onClose();
      
      // Redirect to WhatsApp group after a short delay
      setTimeout(() => {
        window.open("https://chat.whatsapp.com/Gngh4SztFVG6JMv0lz72q3", "_blank");
      }, 1500);
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Erro ao enviar e-book. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            Receba o E-book Gratuito
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">WhatsApp (opcional)</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(11) 99999-9999"
            />
          </div>
          <Button 
            type="submit" 
            variant="cta" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Receber E-book Grátis"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;