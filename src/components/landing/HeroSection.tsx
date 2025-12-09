import { Truck, CreditCard, Percent, MessageCircle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-interior.jpg';

const HeroSection = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Olá! Vi as ofertas especiais e gostaria de saber mais.';

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with refined overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior decorado com peças da Nortês Interiores"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-24 lg:py-32">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Logo */}
          <div className="mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="font-display text-xl font-semibold tracking-[0.15em] text-primary uppercase">
              Nortês Interiores
            </span>
          </div>

          {/* Urgency Badge */}
          <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-destructive/8 px-4 py-2 text-sm font-medium text-destructive border border-destructive/15">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" />
              Ofertas válidas por tempo limitado
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="mb-8 font-display text-4xl font-semibold leading-[1.15] text-foreground opacity-0 animate-fade-in-up sm:text-5xl md:text-6xl lg:text-7xl" 
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Super Ofertas{' '}
            <span className="text-primary">Exclusivas</span>
            <span className="block mt-2 text-[0.7em] font-normal text-muted-foreground font-sans">
              Peças de decoração com estoque limitado
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-in-up md:text-xl" 
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Seleção especial de quadros, esculturas, almofadas e objetos de decoração 
            com <span className="text-foreground font-medium">descontos exclusivos</span> por tempo limitado.
          </p>

          {/* CTAs */}
          <div 
            className="mb-14 flex flex-col gap-4 opacity-0 animate-fade-in-up sm:flex-row" 
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
            className="flex flex-wrap gap-x-8 gap-y-4 opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            {[
              { icon: Truck, text: 'Frete grátis acima de R$ 299' },
              { icon: Percent, text: '5% desconto no PIX' },
              { icon: CreditCard, text: 'Até 12x sem juros' },
              { icon: Package, text: 'Embalagem premium' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <item.icon className="h-4 w-4 text-primary/70" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" 
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <a 
          href="#ofertas" 
          className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Ver ofertas</span>
          <div className="h-10 w-6 rounded-full border-2 border-current opacity-50 flex items-start justify-center pt-2 group-hover:opacity-100 transition-opacity">
            <div className="h-1.5 w-1 rounded-full bg-current animate-float" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;