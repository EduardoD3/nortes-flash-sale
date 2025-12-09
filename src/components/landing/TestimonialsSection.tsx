import { mockTestimonials } from '@/data/products';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="bg-section-alt py-24 lg:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary">
            Depoimentos
          </span>
          <h2 className="mb-5 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Milhares de ambientes transformados com peças da Nortês Interiores.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mockTestimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="group relative flex flex-col rounded-2xl bg-card border border-border/60 p-6 shadow-subtle hover-lift opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 right-6">
                <div className="rounded-xl bg-primary p-2 shadow-soft">
                  <Quote className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-card-foreground">
                "{testimonial.comment}"
              </blockquote>

              {/* Author */}
              <footer className="mt-auto pt-5 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-base font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
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