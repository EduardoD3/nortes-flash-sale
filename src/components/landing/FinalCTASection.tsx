import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const FinalCTASection = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Olá! Vi as ofertas especiais e gostaria de saber mais.';

  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
            Compra 100% segura
          </div>

          {/* Headline */}
          <h2 className="mb-6 font-display text-3xl font-semibold text-primary-foreground sm:text-4xl md:text-5xl leading-tight">
            Garanta suas peças favoritas antes que acabem
          </h2>

          {/* Description */}
          <p className="mb-10 text-lg text-primary-foreground/75 leading-relaxed max-w-lg mx-auto">
            Decoração com personalidade, sem pagar caro. Essa seleção exclusiva não ficará disponível por muito tempo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/95 shadow-card hover:shadow-elevated active:scale-[0.98] transition-all duration-300"
              asChild
            >
              <a href="#ofertas">
                Ver todas as ofertas
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="xl" 
              className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-medium"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-10 text-sm text-primary-foreground/50">
            Entrega para todo Brasil • Troca em até 7 dias • Atendimento humanizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;