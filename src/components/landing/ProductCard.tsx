import { Product, badgeLabels } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Tag, AlertTriangle } from 'lucide-react';

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
        return 'bg-destructive text-destructive-foreground';
      case 'ULTIMAS_UNIDADES':
        return 'bg-accent text-accent-foreground';
      case 'EXCLUSIVO_ONLINE':
        return 'bg-secondary text-secondary-foreground';
      case 'MAIS_VENDIDO':
        return 'bg-primary text-primary-foreground';
      case 'NOVO':
        return 'bg-olive text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
      {/* Badge */}
      <div className="absolute left-3 top-3 z-10">
        <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${getBadgeStyles(product.badge)}`}>
          <Tag className="h-3 w-3" />
          {badgeLabels[product.badge]}
        </span>
      </div>

      {/* Discount Badge */}
      <div className="absolute right-3 top-3 z-10">
        <span className="inline-flex items-center rounded-full bg-destructive px-3 py-1 text-sm font-bold text-destructive-foreground">
          -{product.discountPercentage}%
        </span>
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 font-display text-lg font-semibold text-card-foreground line-clamp-2">
          {product.name}
        </h3>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-1">
          {product.description}
        </p>

        {/* Pricing */}
        <div className="mb-3 flex items-baseline gap-2">
          <span className="text-sm text-muted-foreground line-through">
            {formatPrice(product.price)}
          </span>
          <span className="font-display text-2xl font-bold text-primary">
            {formatPrice(product.salePrice)}
          </span>
        </div>

        {/* Stock Warning */}
        {product.isLimited && product.stockQuantity && product.stockQuantity <= 5 && (
          <div className="mb-3 flex items-center gap-1 text-xs text-destructive">
            <AlertTriangle className="h-3 w-3" />
            <span>Apenas {product.stockQuantity} unidades restantes!</span>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto flex gap-2">
          <Button variant="cta" className="flex-1" asChild>
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
