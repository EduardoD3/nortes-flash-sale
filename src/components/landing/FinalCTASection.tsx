import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const FinalCTASection = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Olá! Vi as ofertas especiais e gostaria de saber mais.';

  return (
    <section className="relative overflow-hidden bg-primary py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary-foreground" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground" />
        <div className="absolute left-1/3 top-1/4 h-20 w-20 rounded-full bg-primary-foreground" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
            Compra 100% segura
          </div>

          {/* Headline */}
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Garanta agora suas peças favoritas antes que acabem
          </h2>

          {/* Description */}
          <p className="mb-8 text-lg text-primary-foreground/80">
            Decoração com personalidade, sem pagar caro. Essa seleção exclusiva não ficará disponível por muito tempo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              asChild
            >
              <a href="#ofertas">
                Ver todas as ofertas
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-primary-foreground/60">
            Entrega para todo Brasil • Troca e devolução em até 7 dias • Atendimento humanizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
