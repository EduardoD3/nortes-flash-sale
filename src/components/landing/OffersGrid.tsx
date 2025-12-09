import { useState } from 'react';
import { OfferFilter } from '@/types/product';
import { getFilteredProducts } from '@/data/products';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Sparkles, Clock, Package, Star } from 'lucide-react';

const filterOptions: { value: OfferFilter; label: string; icon: React.ReactNode }[] = [
  { value: 'all', label: 'Todas', icon: <Sparkles className="h-4 w-4" /> },
  { value: 'weekly', label: 'Da Semana', icon: <Clock className="h-4 w-4" /> },
  { value: 'limited', label: 'Últimas Unidades', icon: <Package className="h-4 w-4" /> },
  { value: 'collection', label: 'Coleção Especial', icon: <Star className="h-4 w-4" /> },
];

const OffersGrid = () => {
  const [activeFilter, setActiveFilter] = useState<OfferFilter>('all');
  const filteredProducts = getFilteredProducts(activeFilter);

  return (
    <section id="ofertas" className="bg-section-alt py-24 lg:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary">
            Promoções Exclusivas
          </span>
          <h2 className="mb-5 font-display text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            Super Ofertas Selecionadas
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
            Peças únicas para transformar seu ambiente com até 40% de desconto. 
            Estoque limitado — quando acabar, acabou.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={activeFilter === option.value ? 'cta' : 'outline'}
              size="default"
              onClick={() => setActiveFilter(option.value)}
              className="gap-2"
            >
              {option.icon}
              <span className="hidden sm:inline">{option.label}</span>
              <span className="sm:hidden">{option.label.split(' ')[0]}</span>
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.08 * index}s`, animationFillMode: 'forwards' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Nenhum produto encontrado nesta categoria no momento.
            </p>
            <Button
              variant="outline"
              onClick={() => setActiveFilter('all')}
            >
              Ver todas as ofertas
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OffersGrid;