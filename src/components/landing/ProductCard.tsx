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
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'ULTIMAS_UNIDADES':
        return 'bg-accent/15 text-accent-foreground border-accent/30';
      case 'EXCLUSIVO_ONLINE':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'MAIS_VENDIDO':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'NOVO':
        return 'bg-olive/10 text-olive border-olive/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 shadow-subtle hover-lift">
      {/* Badges container */}
      <div className="absolute left-4 right-4 top-4 z-10 flex items-start justify-between">
        {/* Category Badge */}
        <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium border ${getBadgeStyles(product.badge)}`}>
          {badgeLabels[product.badge]}
        </span>

        {/* Discount Badge */}
        <span className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-soft">
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
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1.5 font-display text-lg font-semibold text-card-foreground leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-1">
          {product.description}
        </p>

        {/* Pricing */}
        <div className="mb-4 flex items-baseline gap-3">
          <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/50">
            {formatPrice(product.price)}
          </span>
          <span className="font-display text-2xl font-semibold text-primary">
            {formatPrice(product.salePrice)}
          </span>
        </div>

        {/* Stock Warning */}
        {product.isLimited && product.stockQuantity && product.stockQuantity <= 5 && (
          <div className="mb-4 flex items-center gap-1.5 text-xs text-destructive font-medium">
            <AlertTriangle className="h-3.5 w-3.5" />
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