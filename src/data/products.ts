export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  pack: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Jus de Pomme',
    price: 2500,
    image: '🍏',
    rating: 4.5,
    reviews: 32,
    description: 'Jus de pomme frais préparé à partir de pommes biologiques cueillies à la main',
    category: 'Meilleures Ventes',
    pack: '01+ Boîte (02 Packs)'
  },
  {
    id: 2,
    name: 'Jus d\'Orange',
    price: 2900,
    image: '🍊',
    rating: 4.8,
    reviews: 45,
    description: 'Pur jus d\'orange riche en Vitamine C',
    category: 'Meilleures Ventes',
    pack: '01+ Boîte (02 Packs)'
  },
  {
    id: 3,
    name: 'Jus de Mangue',
    price: 2600,
    image: '🥭',
    rating: 4.7,
    reviews: 38,
    description: 'Jus de mangue tropical au goût authentique',
    category: 'Commande Unique',
    pack: '01+ Boîte (02 Packs)'
  },
  {
    id: 4,
    name: 'Jus de Pastèque',
    price: 3000,
    image: '🍉',
    rating: 4.9,
    reviews: 52,
    description: 'Jus de pastèque rafraîchissant pour les journées chaudes',
    category: 'Commande Hebdo',
    pack: '01+ Boîte (02 Packs)'
  },
  {
    id: 5,
    name: 'Jus d\'Ananas',
    price: 2700,
    image: '🍍',
    rating: 4.6,
    reviews: 29,
    description: 'Jus d\'ananas sucré à la saveur naturelle',
    category: 'Meilleures Ventes',
    pack: '01+ Boîte (02 Packs)'
  },
  {
    id: 6,
    name: 'Jus de Fraise',
    price: 2800,
    image: '🍓',
    rating: 4.8,
    reviews: 41,
    description: 'Jus de fraise frais débordant de saveur',
    category: 'Commande Unique',
    pack: '01+ Boîte (02 Packs)'
  }
];

export const categories = ['Tous', 'Meilleures Ventes', 'Commande Unique', 'Commande Hebdo'];

export const juiceTypes = [
  { name: 'Jus de Fruits Frais', count: '02/04' },
  { name: 'Jus Pressés à Froid', count: '03/04' },
  { name: 'Jus Détox & Bien-être', count: '04/04' },
  { name: 'Smoothies & Mélanges', count: '01/04' }
];
