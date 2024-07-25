import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';

type Props = {
  rating: number;
}

export const FeedbackRating = ({ rating }: Readonly<Props>) => {
  return (
    <div className="flex">
      {
        new Array(5).fill(null).map((_, index) =>
          (
            <Star key={index} className={cn(
              'group-hover:text-primary-white text-primary-blue group-hover:fill-primary-white fill-primary-blue',
            )}/>
          ))
      }
    </div>
  );
};
