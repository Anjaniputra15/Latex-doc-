import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false,
  className
}) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= rating;
    const isHalf = starValue === Math.ceil(rating) && rating % 1 !== 0;

    return (
      <div key={index} className="relative">
        <Star
          className={cn(
            sizeClasses[size],
            'text-muted-foreground',
            className
          )}
        />
        {(isFilled || isHalf) && (
          <Star
            className={cn(
              sizeClasses[size],
              'absolute inset-0 text-yellow-400 fill-yellow-400',
              isHalf && 'clip-path-half',
              className
            )}
            style={isHalf ? { clipPath: 'inset(0 50% 0 0)' } : undefined}
          />
        )}
      </div>
    );
  });

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {stars}
      </div>
      {showValue && (
        <span className="text-sm text-muted-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};