import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RatingStars } from '@/components/ui/rating-stars';
import { PriceTag } from '@/components/ui/price-tag';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
  onAdd?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug
    });
    
    onAdd?.(product);
    openCart();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group cursor-pointer">
        <Link to={`/shop/${product.slug}`} className="block h-full">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Badge
              variant="secondary"
              className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm"
            >
              {product.category}
            </Badge>
            <Button
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={handleAddToCart}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <CardContent className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-sm line-clamp-2 mb-2">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between mb-2">
              <RatingStars rating={product.rating} size="sm" />
              <span className="text-xs text-muted-foreground">
                ({product.reviews})
              </span>
            </div>
            
            <div className="mt-auto flex items-center justify-between">
              <PriceTag 
                price={product.price} 
                oldPrice={product.oldPrice}
                className="text-sm"
              />
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};