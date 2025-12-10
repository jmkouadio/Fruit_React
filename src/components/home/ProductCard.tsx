import { useNavigate } from 'react-router-dom';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { formatCFA } from '@/lib/paystack';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} ajouté au panier !`);
  };

  return (
    <div
      className="bg-card border border-border rounded-2xl p-6 hover-lift cursor-pointer group"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="text-7xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
        {product.image}
      </div>
      <h3 className="font-bold text-lg mb-2 text-card-foreground">{product.name}</h3>
      <div className="text-primary font-bold text-2xl mb-2">{formatCFA(product.price)}</div>
      <div className="text-sm text-muted-foreground mb-4">{product.pack}</div>
      <Button
        variant="default"
        className="w-full"
        onClick={handleAddToCart}
      >
        Ajouter au Panier
      </Button>
    </div>
  );
};
