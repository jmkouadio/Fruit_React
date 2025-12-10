import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { JuiceTypesSection } from '@/components/home/JuiceTypesSection';
import { FeaturedBanner } from '@/components/home/FeaturedBanner';
import { ProductsSection } from '@/components/home/ProductsSection';
import { CTABanner } from '@/components/home/CTABanner';

const Index = () => {
  return (
    <div className="min-h-screen gradient-fresh">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <JuiceTypesSection />
        <FeaturedBanner />
        <ProductsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
