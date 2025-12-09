import { Product, Testimonial, FAQItem } from '@/types/product';

/**
 * MOCK DATA - PRODUTOS EM PROMOÇÃO
 * 
 * TODO: Substituir por integração com API/CMS real
 * - Conectar com sistema de gerenciamento de produtos
 * - Sincronizar estoque em tempo real
 * - Obter preços e descontos do backend
 */
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Quadro Abstrato Terracotta',
    description: 'Arte em canvas com moldura de madeira natural',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80',
    price: 489.90,
    salePrice: 319.90,
    discountPercentage: 35,
    badge: 'OFERTA_RELAMPAGO',
    category: 'quadros',
    isLimited: true,
    stockQuantity: 3,
    productUrl: 'https://nortesinteriores.com.br/produtos/quadro-abstrato-terracotta',
  },
  {
    id: '2',
    name: 'Escultura Minimalista Resina',
    description: 'Peça escultural em resina com acabamento fosco',
    imageUrl: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80',
    price: 359.90,
    salePrice: 249.90,
    discountPercentage: 30,
    badge: 'ULTIMAS_UNIDADES',
    category: 'esculturas',
    isLimited: true,
    stockQuantity: 2,
    productUrl: 'https://nortesinteriores.com.br/produtos/escultura-minimalista',
  },
  {
    id: '3',
    name: 'Kit Almofadas Bouclé',
    description: 'Conjunto de 3 almofadas em tecido bouclé',
    imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80',
    price: 299.90,
    salePrice: 199.90,
    discountPercentage: 33,
    badge: 'EXCLUSIVO_ONLINE',
    category: 'almofadas',
    isLimited: false,
    productUrl: 'https://nortesinteriores.com.br/produtos/kit-almofadas-boucle',
  },
  {
    id: '4',
    name: 'Vaso Cerâmica Artesanal',
    description: 'Vaso feito à mão com textura orgânica',
    imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80',
    price: 179.90,
    salePrice: 129.90,
    discountPercentage: 28,
    badge: 'MAIS_VENDIDO',
    category: 'vasos',
    isLimited: true,
    stockQuantity: 5,
    productUrl: 'https://nortesinteriores.com.br/produtos/vaso-ceramica-artesanal',
  },
  {
    id: '5',
    name: 'Luminária Pendente Rattan',
    description: 'Pendente em fibra natural trançada à mão',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    price: 429.90,
    salePrice: 299.90,
    discountPercentage: 30,
    badge: 'OFERTA_RELAMPAGO',
    category: 'luminarias',
    isLimited: true,
    stockQuantity: 4,
    productUrl: 'https://nortesinteriores.com.br/produtos/luminaria-pendente-rattan',
  },
  {
    id: '6',
    name: 'Tapete Geométrico Neutro',
    description: 'Tapete 150x200cm em algodão reciclado',
    imageUrl: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80',
    price: 699.90,
    salePrice: 449.90,
    discountPercentage: 36,
    badge: 'ULTIMAS_UNIDADES',
    category: 'tapetes',
    isLimited: true,
    stockQuantity: 2,
    productUrl: 'https://nortesinteriores.com.br/produtos/tapete-geometrico-neutro',
  },
  {
    id: '7',
    name: 'Bandeja Decorativa Mármore',
    description: 'Bandeja em mármore branco Carrara',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    price: 259.90,
    salePrice: 189.90,
    discountPercentage: 27,
    badge: 'NOVO',
    category: 'objetos',
    isLimited: false,
    productUrl: 'https://nortesinteriores.com.br/produtos/bandeja-marmore',
  },
  {
    id: '8',
    name: 'Quadro Paisagem Mediterrânea',
    description: 'Impressão fine art em papel de algodão',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
    price: 389.90,
    salePrice: 259.90,
    discountPercentage: 33,
    badge: 'EXCLUSIVO_ONLINE',
    category: 'quadros',
    isLimited: true,
    stockQuantity: 6,
    productUrl: 'https://nortesinteriores.com.br/produtos/quadro-paisagem-mediterranea',
  },
];

/**
 * MOCK DATA - DEPOIMENTOS DE CLIENTES
 * 
 * TODO: Substituir por integração com sistema de avaliações real
 */
export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Costa',
    location: 'São Paulo, SP',
    comment: 'Amei os quadros que comprei! A qualidade é incrível e transformaram completamente a minha sala. O atendimento foi super atencioso.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ricardo Mendes',
    location: 'Curitiba, PR',
    comment: 'Produtos exatamente como nas fotos. Chegou muito bem embalado e antes do prazo. Com certeza vou comprar novamente!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Fernanda Almeida',
    location: 'Rio de Janeiro, RJ',
    comment: 'A curadoria da Nortês é impecável. Cada peça que comprei parece ter sido escolhida especialmente para o meu apartamento.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Lucas Ribeiro',
    location: 'Belo Horizonte, MG',
    comment: 'Decoração sofisticada sem precisar gastar uma fortuna. O suporte pelo WhatsApp é excelente!',
    rating: 5,
  },
];

/**
 * FAQ - PERGUNTAS FREQUENTES
 */
export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Quanto tempo demora para meu pedido chegar?',
    answer: 'O prazo de entrega varia de acordo com sua região. Para capitais e regiões metropolitanas, a entrega costuma ocorrer entre 3 a 7 dias úteis. Para outras localidades, pode levar de 7 a 15 dias úteis. Você receberá o código de rastreamento assim que o pedido for despachado.',
  },
  {
    id: '2',
    question: 'Vocês entregam para todo o Brasil?',
    answer: 'Sim! Entregamos para todas as regiões do Brasil. O frete é calculado automaticamente no checkout de acordo com o seu CEP. Oferecemos frete grátis para compras acima de R$ 299,00.',
  },
  {
    id: '3',
    question: 'As fotos do site são fiéis ao produto real?',
    answer: 'Absolutamente! Todas as fotos são tiradas dos produtos reais em nosso estúdio. Pode haver pequenas variações de cor devido às configurações de cada monitor, mas nos esforçamos para que as imagens representem fielmente cada peça.',
  },
  {
    id: '4',
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos cartões de crédito (todas as bandeiras), boleto bancário e PIX. No PIX, você ganha 5% de desconto! Parcelamos em até 12x sem juros no cartão de crédito.',
  },
  {
    id: '5',
    question: 'É seguro comprar na Nortês Interiores?',
    answer: 'Totalmente seguro! Nosso site possui certificado SSL e utilizamos gateways de pagamento reconhecidos no mercado. Além disso, somos uma empresa registrada e você pode acompanhar tudo pelo nosso WhatsApp oficial.',
  },
  {
    id: '6',
    question: 'Posso trocar ou devolver um produto?',
    answer: 'Sim! Você tem até 7 dias após o recebimento para solicitar troca ou devolução, conforme o Código de Defesa do Consumidor. Basta entrar em contato conosco pelo WhatsApp que orientamos todo o processo.',
  },
];

// Helper to filter products
export const getFilteredProducts = (filter: string): Product[] => {
  switch (filter) {
    case 'weekly':
      return mockProducts.filter(p => p.badge === 'OFERTA_RELAMPAGO');
    case 'limited':
      return mockProducts.filter(p => p.isLimited);
    case 'collection':
      return mockProducts.filter(p => p.badge === 'EXCLUSIVO_ONLINE' || p.badge === 'NOVO');
    default:
      return mockProducts;
  }
};
