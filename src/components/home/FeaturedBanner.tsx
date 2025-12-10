import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FeaturedBanner = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="gradient-accent rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Savourez la fraîcheur<br />des fruits
            </h2>
            <p className="text-accent-foreground/80 mb-6">
              Nos jus sont conçus pour dynamiser votre journée et satisfaire vos envies.
            </p>
            <Button variant="default" className="group">
              Commander
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[120px] md:text-[180px] opacity-20">🍊</div>
          
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-20 bg-secondary text-secondary-foreground rounded-2xl px-5 py-3 font-bold">
            <div className="text-2xl">95%</div>
            <div className="text-xs font-normal opacity-90">
              Ingrédients<br />d'origine végétale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
