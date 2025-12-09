import { Truck, CreditCard, Percent, MessageCircle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-interior.jpg';

const HeroSection = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Olá! Vi as ofertas especiais e gostaria de saber mais.';

  return (
    <section className="relative min-h-screen overflow-hidden bg-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior decorado com peças da Nortês Interiores"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-20">
        {/* Logo */}
        <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="font-display text-2xl font-semibold tracking-wide text-primary">
            NORTÊS INTERIORES
          </h2>
        </div>

        {/* Urgency Badge */}
        <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
            <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
            Ofertas válidas por tempo limitado
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in-up md:text-5xl lg:text-6xl" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Super Ofertas Nortês Interiores
          <span className="block text-primary">Peças de Decoração com Estoque Limitado</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in-up md:text-xl" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Seleção especial de quadros, esculturas, almofadas e objetos de decoração 
          com <strong className="text-foreground">descontos exclusivos</strong> por tempo limitado.
        </p>

        {/* CTAs */}
        <div className="mb-12 flex flex-col gap-4 opacity-0 animate-fade-in-up sm:flex-row" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <Button variant="hero" size="xl" asChild>
            <a href="#ofertas">Ver Ofertas Exclusivas</a>
          </Button>
          <Button variant="whatsapp" size="xl" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Falar com um especialista
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="h-5 w-5 text-secondary" />
            <span>Frete grátis acima de R$ 299</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Percent className="h-5 w-5 text-secondary" />
            <span>5% desconto no PIX</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CreditCard className="h-5 w-5 text-secondary" />
            <span>Até 12x sem juros</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Package className="h-5 w-5 text-secondary" />
            <span>Embalagem premium</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-bounce-subtle" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <a href="#ofertas" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
          <span className="text-xs uppercase tracking-wider">Ver ofertas</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
