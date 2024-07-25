'use client';

import Image from 'next/image';

import { feedbacks } from '@/db/schema';
import { Quote } from '@/components/drawings/quote';
import { FeedbackRating } from '@/app/(public)/feedbacks/_components/feedback-rating';

type Props = {
  feedback: typeof feedbacks.$inferSelect;
  handleSelect: (feedbackId: (typeof feedbacks.$inferSelect)['id']) => void;
}

export const FeedbackCard = ({ feedback, handleSelect }: Readonly<Props>) => {
  const handleClick = () => {
    handleSelect(feedback.id);
  };

  return (
    <div
      className="rounded-xl bg-secondary-black px-5 py-8 group hover:bg-primary-accent cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex gap-x-4">
        <div className="rounded-full border-2 border-primary-blue relative w-28 h-28 group-hover:border-primary-white">
          <Image
            src={feedback.imageUrl}
            alt={feedback.imageAlt}
            fill
            className="object-cover object-center rounded-full"
          />

          <div
            className="absolute -bottom-2 right-0 bg-primary-blue rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-primary-white">
            <Quote className="fill-primary-white group-hover:fill-primary-accent"/>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-primary-white text-2xl font-medium">{feedback.name}</p>

          <FeedbackRating rating={feedback.rating}/>
        </div>
      </div>

      <div className="my-8 h-1 bg-primary-blue group-hover:bg-primary-white"/>
      <p className="text-primary-white text-base">
        {feedback.feedback}
      </p>
    </div>
  );
};
