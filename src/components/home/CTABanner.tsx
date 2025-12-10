import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export const CTABanner = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Merci pour votre inscription !');
      setEmail('');
    }
  };

  return (
    <section className="py-16 gradient-hero text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Juice Bar</h2>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80">
          Inscrivez-vous et obtenez jusqu'à 70% sur votre première commande
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground text-foreground border-0 rounded-full px-6 h-12"
            required
          />
          <Button variant="hero" type="submit" className="w-full sm:w-auto whitespace-nowrap">
            S'inscrire
          </Button>
        </form>
      </div>
    </section>
  );
};
