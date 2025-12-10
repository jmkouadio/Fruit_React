import { ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="gradient-hero text-primary-foreground py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10 animate-slide-up">
            <div className="text-6xl md:text-8xl font-bold opacity-20">01</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Un Jus Pour<br />Chaque Moment
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Goûtez le Meilleur de la Nature<br />Dans Chaque Goutte de Saveur Vibrante !
            </p>
            <Button variant="hero" size="lg" className="group">
              Commander
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative flex justify-center">
            <div className="text-[150px] md:text-[200px] animate-bounce-subtle">🍊</div>
            <div className="absolute top-0 left-10 text-6xl opacity-40 animate-pulse-glow">🍃</div>
            <div className="absolute bottom-10 right-10 text-6xl opacity-40 animate-pulse-glow">🍃</div>

            {/* Mini product card */}
            <div className="absolute bottom-8 right-0 md:right-8 bg-card text-card-foreground rounded-2xl p-4 shadow-card-hover animate-float-delayed">
              <div className="text-4xl mb-2">🍓</div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm font-semibold">4.8 (32 Avis)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-8 h-1.5 bg-primary-foreground rounded-full"></div>
        <div className="w-8 h-1.5 bg-primary-foreground/30 rounded-full"></div>
        <div className="w-8 h-1.5 bg-primary-foreground/30 rounded-full"></div>
      </div>
    </section>
  );
};
