import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const FinalCTASection = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Olá! Vi as ofertas especiais e gostaria de saber mais.';

  return (
    <section className="relative overflow-hidden bg-primary py-28 lg:py-36">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary-foreground blur-[100px]" />
        <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-primary-foreground blur-[100px]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 px-5 py-2.5 text-sm font-medium text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
            Compra 100% segura
          </div>

          {/* Headline */}
          <h2 className="mb-8 font-display text-4xl font-semibold text-primary-foreground sm:text-5xl md:text-[3.25rem] leading-[1.1]">
            Garanta suas peças favoritas antes que acabem
          </h2>

          {/* Description */}
          <p className="mb-12 text-lg text-primary-foreground/80 leading-relaxed max-w-lg mx-auto">
            Decoração com personalidade, sem pagar caro. Essa seleção exclusiva não ficará disponível por muito tempo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/95 shadow-card hover:shadow-elevated active:scale-[0.98] transition-all duration-300 rounded-xl"
              asChild
            >
              <a href="#ofertas">
                Ver todas as ofertas
                <ArrowRight className="ml-2.5 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="xl" 
              className="border-2 border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/15 font-medium rounded-xl"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-12 text-sm text-primary-foreground/60 font-medium">
            Entrega para todo Brasil • Troca em até 7 dias • Atendimento humanizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;