import { faqItems } from '@/data/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="mb-6 inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary">
              Dúvidas
            </span>
            <h2 className="mb-6 font-display text-4xl font-semibold text-foreground sm:text-5xl leading-[1.1]">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ainda tem alguma pergunta?{' '}
              <a 
                href="https://wa.me/5511999999999" 
                className="text-primary font-semibold hover:underline underline-offset-4"
              >
                Fale conosco pelo WhatsApp
              </a>
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border border-border/50 rounded-xl px-7 bg-card shadow-soft data-[state=open]:shadow-card transition-shadow opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s`, animationFillMode: 'forwards' }}
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-[1.75]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;