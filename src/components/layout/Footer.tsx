import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/#about' },
  { label: 'Boutique', href: '/#products' },
  { label: 'Contact', href: '/#contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Juice Bar</h3>
            <p className="text-background/60">Rafraîchissement Pur et Naturel</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-background/60">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-primary transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/60">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                +225 07 58 90 42 84
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                contact@jmkouadio.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                Abidjan, CI
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Suivez-nous</h4>
            <div className="flex gap-3">
              <button className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/10 pt-8 text-center text-background/40">
          <p>© 2024 Juice Bar. Tous Droits Réservés.</p>
        </div>
      </div>
    </footer>
  );
};
