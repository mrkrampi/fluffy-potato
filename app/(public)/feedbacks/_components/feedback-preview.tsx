import Image from 'next/image';

import { feedbacks } from '@/db/schema';
import { QuoteOutlined } from '@/components/drawings/quote-outlined';
import { FeedbackRating } from '@/app/(public)/feedbacks/_components/feedback-rating';

type Props = {
  feedback: typeof feedbacks.$inferSelect;
}

export const FeedbackPreview = ({ feedback }: Readonly<Props>) => {
  return (
    <div className="relative">
      <div className="absolute -top-16 -left-12">
        <QuoteOutlined/>
      </div>

      <div className="flex justify-center gap-12">
        <div className="rounded-full border-2 border-primary-blue relative min-w-[188px] h-[188px]">
          <Image
            src={feedback.imageUrl}
            alt={feedback.imageAlt}
            fill
            className="object-cover object-center rounded-full"
          />
        </div>

        <div className="flex flex-col gap-5 text-primary-white max-w-[724px]">
          <p className="text-4xl">{feedback.name}</p>

          <FeedbackRating rating={feedback.rating}/>

          <p className="text-2xl font-medium">
            {feedback.feedback}
          </p>
        </div>
      </div>
    </div>
  );
};
