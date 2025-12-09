import { useState } from 'react';
import { OfferFilter } from '@/types/product';
import { mockProducts, getFilteredProducts } from '@/data/products';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Sparkles, Clock, Package, Star } from 'lucide-react';

const filterOptions: { value: OfferFilter; label: string; icon: React.ReactNode }[] = [
  { value: 'all', label: 'Todas as Ofertas', icon: <Sparkles className="h-4 w-4" /> },
  { value: 'weekly', label: 'Ofertas da Semana', icon: <Clock className="h-4 w-4" /> },
  { value: 'limited', label: 'Últimas Unidades', icon: <Package className="h-4 w-4" /> },
  { value: 'collection', label: 'Coleção Especial', icon: <Star className="h-4 w-4" /> },
];

const OffersGrid = () => {
  const [activeFilter, setActiveFilter] = useState<OfferFilter>('all');
  const filteredProducts = getFilteredProducts(activeFilter);

  return (
    <section id="ofertas" className="bg-muted/30 py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Promoções Exclusivas
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Super Ofertas Selecionadas
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Peças únicas para transformar seu ambiente com até 40% de desconto. 
            Estoque limitado — quando acabar, acabou.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={activeFilter === option.value ? 'cta' : 'outline'}
              size="lg"
              onClick={() => setActiveFilter(option.value)}
              className="gap-2"
            >
              {option.icon}
              {option.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              Nenhum produto encontrado nesta categoria no momento.
            </p>
            <Button
              variant="outline"
              className="mt-4"
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
