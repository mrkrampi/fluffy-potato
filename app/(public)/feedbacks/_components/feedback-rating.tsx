import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';

type Props = {
  rating: number;
  isHighlighted?: boolean;
}

export const FeedbackRating = ({ rating, isHighlighted }: Readonly<Props>) => {
  return (
    <div className="flex">
      {
        new Array(5).fill(null).map((_, index) =>
          (
            <Star key={index} className={cn(
              isHighlighted ? 'text-primary-white' : 'text-primary-blue',
              index <= rating && isHighlighted ? 'fill-primary-white' : 'fill-primary-blue',
            )}/>
          ))
      }
    </div>
  );
};
