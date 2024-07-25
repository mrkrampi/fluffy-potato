import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { getFeedbacks } from '@/db/feedbacks-queries';
import { FEEDBACKS_PER_PAGE } from '@/app/(public)/feedbacks/consts';
import { FeedbacksTopSection } from '@/app/(public)/feedbacks/_components/feedbacks-top-section';
import { FeedbacksContainer } from '@/app/(public)/feedbacks/_components/feedbacks-container';

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

  return (
    <>
      <FeedbacksTopSection/>

      <FeedbacksContainer
        countOfFeedbacks={feedbacks.length}
        currentPageFeedbacks={currentPageFeedbacks}
      />
    </>
  );
};

export default FeedbacksPage;
