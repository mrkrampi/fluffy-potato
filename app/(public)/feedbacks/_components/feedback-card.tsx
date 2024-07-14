import Image from 'next/image';

import { cn } from '@/lib/utils';
import { feedbacks } from '@/db/schema';
import { Quote } from '@/components/drawings/quote';
import { FeedbackRating } from '@/app/(public)/feedbacks/_components/feedback-rating';

type Props = {
  feedback: typeof feedbacks.$inferSelect;
  isHighlighted: boolean;
}

export const FeedbackCard = ({ feedback, isHighlighted }: Readonly<Props>) => {
  return (
    <div className={cn(
      "rounded-xl bg-secondary-black px-5 py-8",
      isHighlighted && "bg-primary-accent"
    )}>
      <div className="flex gap-x-4">
        <div className={cn(
          "rounded-full border-2 border-primary-blue relative w-28 h-28",
          isHighlighted && "border-primary-white",
        )}>
          <Image
            src={feedback.imageUrl}
            alt={feedback.imageAlt}
            fill
            className="object-cover object-center rounded-full"
          />

          <div
            className={cn(
              "absolute -bottom-2 right-0 bg-primary-blue rounded-full w-8 h-8 flex items-center justify-center",
              isHighlighted && "bg-primary-white"
            )}>
            <Quote className={cn(
              "fill-primary-white",
              isHighlighted && "fill-primary-accent"
            )}/>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-primary-white text-2xl font-medium">{feedback.name}</p>

          <FeedbackRating rating={feedback.rating} isHighlighted={isHighlighted}/>
        </div>
      </div>

      <div className={cn(
        "my-8 h-1",
        isHighlighted ? 'bg-primary-white' : 'bg-primary-blue'
      )}/>

      <p className="text-primary-white text-base">
        {feedback.feedback}
      </p>
    </div>
  );
};
