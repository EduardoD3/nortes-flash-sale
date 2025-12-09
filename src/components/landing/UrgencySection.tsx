import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UrgencySection = () => {
  // This could be dynamic based on real-time data
  const percentageUsed = 73;

  return (
    <section className="relative overflow-hidden bg-foreground py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_currentColor_1px,_transparent_0)] [background-size:24px_24px]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Icon */}
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-destructive/20 p-4">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>

          {/* Headline */}
          <h2 className="mb-4 font-display text-3xl font-bold text-background md:text-4xl">
            Não deixe para depois: essas peças acabam de verdade.
          </h2>

          {/* Description */}
          <p className="mb-8 text-lg text-background/80">
            Estoque limitado. Reposição incerta. Condições exclusivas apenas para essa página.
            <br />
            <strong className="text-background">Quando acabar, acabou.</strong>
          </p>

          {/* Progress Bar */}
          <div className="mx-auto mb-8 max-w-md">
            <div className="mb-2 flex items-center justify-between text-sm text-background/70">
              <span className="flex items-center gap-1">
                <TrendingDown className="h-4 w-4" />
                Ofertas aproveitadas
              </span>
              <span className="font-semibold text-background">{percentageUsed}%</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-background/20">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-accent to-destructive transition-all duration-1000"
                style={{ width: `${percentageUsed}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-background/60">
              Apenas {100 - percentageUsed}% das ofertas ainda disponíveis
            </p>
          </div>

          {/* Countdown / Timer Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-destructive/20 px-6 py-3 text-destructive">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="font-semibold">Preços válidos enquanto durarem os estoques</span>
          </div>

          {/* CTA */}
          <div>
            <Button variant="urgency" size="xl" asChild>
              <a href="#ofertas">
                Aproveitar agora antes que acabe
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
