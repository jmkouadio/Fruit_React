import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart, Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { formatCFA } from '@/lib/paystack';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Produit non trouvé</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} ajouté au panier !`);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sticky top-0 bg-background z-40 border-b border-border">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="font-bold text-xl">Détails du Produit</h1>
          <Button variant="ghost" size="icon">
            <Heart className="w-6 h-6" />
          </Button>
        </div>

        <div className="p-6">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl py-16 mb-8 relative">
            <div className="text-[150px] text-center animate-bounce-subtle">{product.image}</div>
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              {product.category}
            </div>
          </div>

          {/* Product Info */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">({product.reviews} avis)</span>
            </div>
            <div className="text-4xl font-bold text-primary mb-4">{formatCFA(product.price)}</div>
            <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
            <div className="text-sm text-muted-foreground">{product.pack}</div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-6 mb-8">
            <span className="font-semibold">Quantité :</span>
            <div className="flex items-center gap-4 bg-muted rounded-full px-4 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-primary hover:text-primary/80 transition"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-bold text-xl w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-primary hover:text-primary/80 transition"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button onClick={handleAddToCart} className="flex-1" size="lg">
              <ShoppingCart className="w-5 h-5" />
              Ajouter au Panier
            </Button>
            <Button variant="outline" size="lg" className="px-6">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
