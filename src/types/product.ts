// Types for Nortês Interiores Products
// Replace this data with real API/CMS integration

export type ProductBadge = 
  | 'OFERTA_RELAMPAGO' 
  | 'ULTIMAS_UNIDADES' 
  | 'EXCLUSIVO_ONLINE' 
  | 'MAIS_VENDIDO'
  | 'NOVO';

export type ProductCategory = 
  | 'quadros' 
  | 'esculturas' 
  | 'almofadas' 
  | 'vasos' 
  | 'luminarias'
  | 'tapetes'
  | 'objetos';

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  salePrice: number;
  discountPercentage: number;
  badge: ProductBadge;
  category: ProductCategory;
  isLimited: boolean;
  stockQuantity?: number;
  // URL for product detail page on main site
  productUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type OfferFilter = 'all' | 'weekly' | 'limited' | 'collection';

export const badgeLabels: Record<ProductBadge, string> = {
  OFERTA_RELAMPAGO: 'Oferta Relâmpago',
  ULTIMAS_UNIDADES: 'Últimas Unidades',
  EXCLUSIVO_ONLINE: 'Exclusivo Online',
  MAIS_VENDIDO: 'Mais Vendido',
  NOVO: 'Novo',
};

export const categoryLabels: Record<ProductCategory, string> = {
  quadros: 'Quadros',
  esculturas: 'Esculturas',
  almofadas: 'Almofadas',
  vasos: 'Vasos',
  luminarias: 'Luminárias',
  tapetes: 'Tapetes',
  objetos: 'Objetos Decorativos',
};
