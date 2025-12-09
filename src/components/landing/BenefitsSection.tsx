import { Truck, Percent, CreditCard, Heart, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'Frete Grátis',
    description: 'Acima de R$ 299,00 para todo o Brasil',
  },
  {
    icon: Percent,
    title: 'Desconto no PIX',
    description: '5% de desconto à vista via PIX',
  },
  {
    icon: CreditCard,
    title: 'Parcelamento',
    description: 'Até 12x sem juros no cartão',
  },
  {
    icon: Heart,
    title: 'Curadoria Exclusiva',
    description: 'Peças selecionadas a dedo para você',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento Humano',
    description: 'Suporte personalizado via WhatsApp',
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Por que comprar na Nortês?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Decoração de qualidade com atendimento que você merece.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group flex flex-col items-center text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <benefit.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
