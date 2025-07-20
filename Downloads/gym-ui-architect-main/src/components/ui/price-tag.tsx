import React from 'react';
import { cn } from '@/lib/utils';

interface PriceTagProps {
  price: number;
  oldPrice?: number;
  currency?: string;
  className?: string;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  oldPrice,
  currency = 'USD',
  className
}) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2
    }).format(amount / 100);
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="text-lg font-bold text-foreground">
        {formatPrice(price)}
      </span>
      {oldPrice && oldPrice > price && (
        <span className="text-sm text-muted-foreground line-through">
          {formatPrice(oldPrice)}
        </span>
      )}
    </div>
  );
};