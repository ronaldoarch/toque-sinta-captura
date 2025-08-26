import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SendEbookRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: SendEbookRequest = await req.json();

    console.log(`Sending ebook to ${email} for ${name}`);

    // Get the ebook file from storage
    const { data: ebookFile, error: storageError } = await supabase.storage
      .from('ebooks')
      .download('guia-toque-sinta.pdf');

    let attachments = undefined;
    if (!storageError && ebookFile) {
      // Convert blob to array buffer for attachment
      const arrayBuffer = await ebookFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      
      attachments = [{
        filename: 'Guia-Completo-Toque-Sinta.pdf',
        content: uint8Array,
        content_type: 'application/pdf'
      }];
    } else {
      console.warn("Ebook file not found in storage:", storageError?.message);
    }

    const emailResponse = await resend.emails.send({
      from: "Naira Lira <onboarding@resend.dev>",
      to: [email],
      subject: "🎁 Seu E-book Gratuito: Guia Completo de Toque e Sinta",
      attachments,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Obrigada, ${name}! 🎉</h1>
            <p style="margin: 15px 0 0 0; font-size: 18px;">Seu e-book está anexado neste email</p>
          </div>
          
          <div style="padding: 40px 30px; background: #f8f9fa;">
            <h2 style="color: #333; margin-bottom: 20px;">📚 Guia Completo: Método Toque e Sinta</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Este e-book contém técnicas exclusivas que desenvolvi ao longo de anos de prática e estudo. 
              Você aprenderá:
            </p>
            
            <ul style="color: #666; line-height: 1.8; margin-bottom: 30px;">
              <li>✨ Fundamentos do método Toque e Sinta</li>
              <li>🧘‍♀️ Técnicas de relaxamento profundo</li>
              <li>💫 Exercícios práticos para o dia a dia</li>
              <li>🎯 Como aplicar em diferentes situações</li>
              <li>📈 Progressão e evolução pessoal</li>
            </ul>
            
            <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
              <h3 style="color: #1976d2; margin-bottom: 10px;">📎 E-book Anexado</h3>
              <p style="color: #666; margin: 0;">
                O arquivo PDF está anexado a este email. Verifique os anexos para fazer o download.
              </p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 30px;">
              <h3 style="color: #333; margin-bottom: 15px;">🔥 Bonus Exclusivo</h3>
              <p style="color: #666; margin: 0;">
                Junto com o e-book, você recebe acesso a uma aula gratuita onde demonstro 
                as principais técnicas na prática. Não perca!
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 30px; text-align: center;">
            <p style="margin: 0 0 10px 0;">Com carinho,</p>
            <p style="margin: 0; font-size: 18px; font-weight: bold;">Naira Lira</p>
            <p style="margin: 10px 0 0 0; color: #ccc; font-size: 14px;">
              Especialista em Técnicas de Bem-estar e Relaxamento
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-ebook function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);