import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, X, ShoppingCart, Loader2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { formatCFA, generateReference, initializePaystackPayment } from '@/lib/paystack';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const subtotal = parseFloat(getTotalPrice());
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = async () => {
    if (!email) {
      toast.error('Veuillez entrer votre adresse email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    setIsLoading(true);

    try {
      const reference = generateReference();
      const callback_url = `${window.location.origin}/payment-callback?reference=${reference}`;

      const response = await initializePaystackPayment({
        email,
        amount: total,
        reference,
        callback_url,
      });

      // Redirect to Paystack payment page
      window.location.href = response.authorization_url;
    } catch (error) {
      console.error('Payment error:', error);
      toast.error(error instanceof Error ? error.message : 'Erreur lors du paiement');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-card shadow-sm sticky top-0 z-40 p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-bold">Panier</h1>
            <div className="w-10"></div>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 px-4">
            <div className="text-[100px] mb-4 animate-bounce-subtle">🛒</div>
            <h2 className="text-2xl font-bold mb-2">Votre panier est vide</h2>
            <p className="text-muted-foreground mb-6">
              Ajoutez de délicieux jus pour commencer !
            </p>
            <Button onClick={() => navigate('/')} size="lg">
              Commencer vos achats
            </Button>
          </div>
        ) : (
          <div className="p-4">
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl p-4 shadow-card flex items-center gap-4"
                >
                  <div className="text-5xl md:text-6xl">{item.image}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1 truncate">{item.name}</h3>
                    <div className="text-primary font-bold text-xl">{formatCFA(item.price)}</div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-muted rounded-full p-2 hover:bg-muted/80 transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/90 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive/80 transition ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Email Input */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
              <Label htmlFor="email" className="text-lg font-semibold mb-3 block">
                Email pour le paiement
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-lg"
              />
            </div>

            {/* Summary */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
              <h3 className="font-bold text-xl mb-4">Récapitulatif</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Sous-total ({getTotalItems()} articles)</span>
                  <span>{formatCFA(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Livraison</span>
                  <span className="text-secondary font-semibold">Gratuite</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>TVA (10%)</span>
                  <span>{formatCFA(tax)}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-bold text-2xl">
                  <span>Total</span>
                  <span className="text-primary">{formatCFA(total)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Button 
              onClick={handleCheckout} 
              className="w-full" 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Chargement...
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Payer avec Paystack
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
