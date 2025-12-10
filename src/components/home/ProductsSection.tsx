import { useState } from 'react';
import { products, categories } from '@/data/products';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

export const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'Tous' || product.category === selectedCategory
  );

  return (
    <section id="products" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Découvrez <span className="text-muted-foreground italic">Nos Produits —</span>
          </h2>

          {/* Category filters - Desktop */}
          <div className="hidden md:flex gap-3">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Category filters - Mobile */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat)}
              className="flex-shrink-0 rounded-full"
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
