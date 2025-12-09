import { faqItems } from '@/data/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          {/* Section Header */}
          <div className="mb-14 text-center">
            <span className="mb-5 inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Dúvidas
            </span>
            <h2 className="mb-5 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground">
              Ainda tem alguma pergunta?{' '}
              <a 
                href="https://wa.me/5511999999999" 
                className="text-primary font-medium hover:underline underline-offset-4"
              >
                Fale conosco pelo WhatsApp
              </a>
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border border-border/60 rounded-xl px-6 bg-card shadow-subtle data-[state=open]:shadow-soft transition-shadow opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s`, animationFillMode: 'forwards' }}
              >
                <AccordionTrigger className="text-left font-display text-base font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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