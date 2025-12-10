import { mockTestimonials } from '@/data/products';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="bg-section-alt py-28 lg:py-36">
      <div className="container">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="mb-6 inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary">
            Depoimentos
          </span>
          <h2 className="mb-6 font-display text-4xl font-semibold text-foreground sm:text-5xl leading-[1.1]">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-lg text-lg text-muted-foreground leading-relaxed">
            Milhares de ambientes transformados com peças da Nortês Interiores.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {mockTestimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="group relative flex flex-col rounded-2xl bg-card border border-border/50 p-7 shadow-soft hover:shadow-card transition-shadow duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3.5 right-6">
                <div className="rounded-xl bg-primary p-2.5 shadow-soft">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="mb-7 flex-1 text-base leading-[1.75] text-card-foreground">
                "{testimonial.comment}"
              </blockquote>

              {/* Author */}
              <footer className="mt-auto pt-6 border-t border-border">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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