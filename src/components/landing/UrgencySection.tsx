import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UrgencySection = () => {
  // This could be dynamic based on real-time data
  const percentageUsed = 73;

  return (
    <section className="relative overflow-hidden bg-charcoal py-20 lg:py-28">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mb-8 inline-flex items-center justify-center rounded-2xl bg-destructive/15 p-4">
            <AlertTriangle className="h-7 w-7 text-destructive" />
          </div>

          {/* Headline */}
          <h2 className="mb-5 font-display text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">
            Não deixe para depois
          </h2>

          {/* Description */}
          <p className="mb-10 text-lg text-cream/70 leading-relaxed max-w-lg mx-auto">
            Estoque limitado. Reposição incerta. Condições exclusivas apenas para essa página.
          </p>

          {/* Progress Bar */}
          <div className="mx-auto mb-10 max-w-sm">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-cream/60">
                <TrendingDown className="h-4 w-4" />
                Ofertas já aproveitadas
              </span>
              <span className="font-semibold text-cream">{percentageUsed}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-cream/10">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-accent via-accent to-destructive/80 transition-all duration-1000"
                style={{ width: `${percentageUsed}%` }}
              />
            </div>
            <p className="mt-3 text-xs text-cream/50">
              Restam apenas {100 - percentageUsed}% das ofertas disponíveis
            </p>
          </div>

          {/* Timer Badge */}
          <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-cream/5 border border-cream/10 px-5 py-2.5 text-sm text-cream/80">
            <Clock className="h-4 w-4 animate-pulse-gentle" />
            <span>Preços válidos enquanto durarem os estoques</span>
          </div>

          {/* CTA */}
          <div>
            <Button variant="premium" size="xl" asChild>
              <a href="#ofertas">
                Aproveitar agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;