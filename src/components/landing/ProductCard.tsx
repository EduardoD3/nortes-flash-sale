import { Product, badgeLabels } from '@/types/product';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getBadgeStyles = (badge: Product['badge']) => {
    switch (badge) {
      case 'OFERTA_RELAMPAGO':
        return 'bg-destructive text-white';
      case 'ULTIMAS_UNIDADES':
        return 'bg-accent text-foreground';
      case 'EXCLUSIVO_ONLINE':
        return 'bg-secondary text-white';
      case 'MAIS_VENDIDO':
        return 'bg-primary text-primary-foreground';
      case 'NOVO':
        return 'bg-olive text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-shadow duration-300">
      {/* Badges container */}
      <div className="absolute left-4 right-4 top-4 z-10 flex items-start justify-between">
        {/* Category Badge */}
        <span className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold shadow-subtle ${getBadgeStyles(product.badge)}`}>
          {badgeLabels[product.badge]}
        </span>

        {/* Discount Badge */}
        <span className="inline-flex items-center rounded-lg bg-foreground px-3 py-1.5 text-xs font-bold text-background shadow-soft">
          -{product.discountPercentage}%
        </span>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-display text-xl font-semibold text-card-foreground leading-tight line-clamp-2">
          {product.name}
        </h3>
        <p className="mb-5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Pricing */}
        <div className="mb-5 flex items-baseline gap-3">
          <span className="text-sm text-muted-foreground/70 line-through">
            {formatPrice(product.price)}
          </span>
          <span className="font-display text-2xl font-bold text-primary">
            {formatPrice(product.salePrice)}
          </span>
        </div>

        {/* Stock Warning */}
        {product.isLimited && product.stockQuantity && product.stockQuantity <= 5 && (
          <div className="mb-5 flex items-center gap-2 text-sm text-destructive font-medium">
            <AlertTriangle className="h-4 w-4" />
            <span>Apenas {product.stockQuantity} unidades restantes</span>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <Button variant="cta" className="w-full" asChild>
            <a href={product.productUrl || '#'} target="_blank" rel="noopener noreferrer">
              Comprar agora
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;