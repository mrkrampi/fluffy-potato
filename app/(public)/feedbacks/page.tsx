import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { Pagination } from '@/components/pagination';
import { Section } from '@/components/markup/section';
import { getFeedbacks } from '@/db/feedbacks-queries';
import { FeedbackCard } from '@/app/(public)/feedbacks/_components/feedback-card';
import { FeedbackPreview } from '@/app/(public)/feedbacks/_components/feedback-preview';
import { FeedbacksTopSection } from '@/app/(public)/feedbacks/_components/feedbacks-top-section';

const PREVIEW_FEEDBACK_INDEX = 1;
const FEEDBACKS_PER_PAGE = 12;

export const metadata: Metadata = {
  title: siteConfig.feedbacksTitle,
  description: siteConfig.feedbacksDescription,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/feedbacks`,
  },
};

type Props = {
  searchParams: Record<string, any>;
}

const FeedbacksPage = async ({ searchParams }: Readonly<Props>) => {
  const { page = 1 } = searchParams;
  const feedbacksData = getFeedbacks();

  const [
    feedbacks,
  ] = await Promise.all([
    feedbacksData,
  ]);

  const currentPageFeedbacks = feedbacks.slice((page - 1) * FEEDBACKS_PER_PAGE, page * FEEDBACKS_PER_PAGE);
  const previewFeedback = currentPageFeedbacks.at(PREVIEW_FEEDBACK_INDEX);

  return (
    <>
      <FeedbacksTopSection/>

      <Section className="lg:pt-16">
        <div className="mb-20 lg:ml-52">
          {previewFeedback && <FeedbackPreview feedback={previewFeedback}/>}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-5 lg:gap-x-8 lg:gap-y-20">
          {
            currentPageFeedbacks.map((feedback, index) =>
              (
                <FeedbackCard
                  key={feedback.id}
                  feedback={feedback}
                  isHighlighted={index === PREVIEW_FEEDBACK_INDEX}
                />
              ))
          }
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center">
          <Pagination
            typeOfPages="circle"
            countOfPages={Math.ceil(feedbacks.length / FEEDBACKS_PER_PAGE)}
          />
        </div>
      </Section>
    </>
  );
};

export default FeedbacksPage;
