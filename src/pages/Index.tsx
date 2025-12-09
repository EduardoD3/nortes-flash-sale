import HeroSection from '@/components/landing/HeroSection';
import OffersGrid from '@/components/landing/OffersGrid';
import UrgencySection from '@/components/landing/UrgencySection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/landing/FAQSection';
import FinalCTASection from '@/components/landing/FinalCTASection';
import Footer from '@/components/landing/Footer';

/**
 * Landing Page de Ofertas Especiais - Nortês Interiores
 * 
 * Esta página é independente do site principal (nortesinteriores.com.br)
 * e foi criada para campanhas de performance (Meta Ads, Google Ads, etc.)
 * 
 * ESTRUTURA:
 * 1. HeroSection - Acima da dobra com headline forte e CTAs
 * 2. OffersGrid - Grid de produtos em promoção com filtros
 * 3. UrgencySection - Seção de escassez e urgência
 * 4. BenefitsSection - Benefícios de comprar na Nortês
 * 5. TestimonialsSection - Prova social com depoimentos
 * 6. FAQSection - Perguntas frequentes (FAQ)
 * 7. FinalCTASection - CTA de encerramento
 * 8. Footer - Rodapé com links e informações
 * 
 * TODO: Integrações pendentes:
 * - Conectar produtos com API/CMS real (ver src/data/products.ts)
 * - Configurar URL real do WhatsApp
 * - Adicionar tracking de conversão (Meta Pixel, Google Ads)
 * - Implementar countdown real para ofertas
 */
const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OffersGrid />
      <UrgencySection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
