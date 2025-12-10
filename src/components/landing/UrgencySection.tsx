import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UrgencySection = () => {
  // This could be dynamic based on real-time data
  const percentageUsed = 73;

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:40px_40px]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mb-10 inline-flex items-center justify-center rounded-2xl bg-destructive/20 p-5">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>

          {/* Headline */}
          <h2 className="mb-6 font-display text-4xl font-semibold text-[hsl(45,45%,97%)] sm:text-5xl md:text-[3.25rem] leading-[1.1]">
            Não deixe para depois
          </h2>

          {/* Description */}
          <p className="mb-12 text-lg text-[hsl(45,30%,80%)] leading-relaxed max-w-lg mx-auto">
            Estoque limitado. Reposição incerta. Condições exclusivas apenas para essa página.
          </p>

          {/* Progress Bar */}
          <div className="mx-auto mb-12 max-w-md">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2.5 text-[hsl(45,25%,70%)]">
                <TrendingDown className="h-4 w-4" />
                Ofertas já aproveitadas
              </span>
              <span className="font-bold text-[hsl(45,45%,97%)] text-base">{percentageUsed}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[hsl(45,20%,25%)]">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-accent via-gold to-destructive transition-all duration-1000"
                style={{ width: `${percentageUsed}%` }}
              />
            </div>
            <p className="mt-4 text-sm text-[hsl(45,20%,55%)]">
              Restam apenas {100 - percentageUsed}% das ofertas disponíveis
            </p>
          </div>

          {/* Timer Badge */}
          <div className="mb-12 inline-flex items-center gap-3 rounded-full bg-[hsl(45,15%,20%)] border border-[hsl(45,20%,30%)] px-6 py-3 text-sm text-[hsl(45,30%,85%)]">
            <Clock className="h-4 w-4 animate-pulse-gentle" />
            <span className="font-medium">Preços válidos enquanto durarem os estoques</span>
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