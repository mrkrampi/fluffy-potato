'use client';

import { feedbacks } from '@/db/schema';
import { Pagination } from '@/components/pagination';
import { Section } from '@/components/markup/section';
import { FEEDBACKS_PER_PAGE } from '@/app/(public)/feedbacks/consts';
import { FeedbackCard } from '@/app/(public)/feedbacks/_components/feedback-card';
import { FeedbackPreview } from '@/app/(public)/feedbacks/_components/feedback-preview';
import { useState } from 'react';

type Props = {
  currentPageFeedbacks: Array<typeof feedbacks.$inferSelect>;
  countOfFeedbacks: number;
}

export const FeedbacksContainer = ({ currentPageFeedbacks, countOfFeedbacks }: Readonly<Props>) => {
  const [selectedFeedbackId, setSelectedFeedbackId] = useState<(typeof feedbacks.$inferSelect)['id'] | undefined>();

  return (
    <Section className="lg:pt-16">
      <div className="hidden lg:block mb-20 lg:ml-52">
        <FeedbackPreview feedbacksList={currentPageFeedbacks} selectedFeedbackId={selectedFeedbackId}/>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-x-8 lg:gap-y-20">
        {
          currentPageFeedbacks.map((feedback, index) =>
            (
              <FeedbackCard
                key={feedback.id}
                feedback={feedback}
                handleSelect={setSelectedFeedbackId}
              />
            ))
        }
      </div>

      <div className="mt-16 lg:mt-24 flex justify-center">
        <Pagination
          typeOfPages="circle"
          countOfPages={Math.ceil(countOfFeedbacks / FEEDBACKS_PER_PAGE)}
        />
      </div>
    </Section>
  );
};
