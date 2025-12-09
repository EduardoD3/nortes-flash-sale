import { mockTestimonials } from '@/data/products';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-medium text-accent-foreground">
            Prova Social
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Milhares de ambientes transformados com peças da Nortês Interiores.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mockTestimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="group relative flex flex-col rounded-lg border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 right-6">
                <div className="rounded-full bg-primary p-2">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="mb-4 flex-1 text-sm leading-relaxed text-card-foreground">
                "{testimonial.comment}"
              </blockquote>

              {/* Author */}
              <footer className="mt-auto border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
