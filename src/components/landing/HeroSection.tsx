import { Truck, CreditCard, Percent, MessageCircle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-interior.jpg';

const HeroSection = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Olá! Vi as ofertas especiais e gostaria de saber mais.';

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior decorado com peças da Nortês Interiores"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(42,35%,97%)] via-[hsl(42,30%,96%,0.92)] to-[hsl(42,25%,95%,0.4)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(42,30%,96%,0.3)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-28 lg:py-36">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Logo */}
          <div className="mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="font-display text-lg font-semibold tracking-[0.18em] text-primary uppercase">
              Nortês Interiores
            </span>
          </div>

          {/* Urgency Badge */}
          <div className="mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-destructive/10 px-5 py-2.5 text-sm font-medium text-destructive border border-destructive/20">
              <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
              Ofertas válidas por tempo limitado
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="mb-8 font-display text-[2.75rem] font-semibold leading-[1.1] text-foreground opacity-0 animate-fade-in-up sm:text-5xl md:text-6xl lg:text-[4.25rem]" 
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Super Ofertas{' '}
            <span className="text-primary">Exclusivas</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="mb-8 font-sans text-xl font-light text-foreground/80 opacity-0 animate-fade-in-up md:text-2xl" 
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            Peças de decoração com estoque limitado
          </p>

          {/* Subheadline */}
          <p 
            className="mb-12 max-w-lg text-base leading-[1.75] text-muted-foreground opacity-0 animate-fade-in-up md:text-lg" 
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Seleção especial de quadros, esculturas, almofadas e objetos de decoração 
            com <span className="text-foreground font-medium">descontos exclusivos</span> por tempo limitado.
          </p>

          {/* CTAs */}
          <div 
            className="mb-16 flex flex-col gap-4 opacity-0 animate-fade-in-up sm:flex-row" 
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#ofertas">Ver Ofertas Exclusivas</a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar com especialista
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div 
            className="flex flex-wrap gap-x-10 gap-y-4 opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            {[
              { icon: Truck, text: 'Frete grátis acima de R$ 299' },
              { icon: Percent, text: '5% desconto no PIX' },
              { icon: CreditCard, text: 'Até 12x sem juros' },
              { icon: Package, text: 'Embalagem premium' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-sm text-foreground/70">
                <item.icon className="h-4 w-4 text-primary" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" 
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <a 
          href="#ofertas" 
          className="group flex flex-col items-center gap-2.5 text-foreground/50 transition-colors hover:text-primary"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-medium">Ver ofertas</span>
          <div className="h-10 w-6 rounded-full border-2 border-current flex items-start justify-center pt-2 group-hover:border-primary transition-colors">
            <div className="h-1.5 w-1 rounded-full bg-current animate-float" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;