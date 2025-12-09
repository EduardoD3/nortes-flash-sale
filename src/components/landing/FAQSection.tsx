import { faqItems } from '@/data/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-medium text-secondary">
              Dúvidas Frequentes
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground">
              Tire suas dúvidas antes de comprar. Ainda tem alguma pergunta? 
              <a href="https://wa.me/5511999999999" className="ml-1 text-primary underline hover:no-underline">
                Fale conosco pelo WhatsApp
              </a>
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border-border opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s`, animationFillMode: 'forwards' }}
              >
                <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
