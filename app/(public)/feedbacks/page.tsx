import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.feedbacksTitle,
  description: siteConfig.feedbacksDescription,
  alternates: {
    canonical: `${process.env.BASE_URL}/feedbacks`,
  }
};

const FeedbacksPage = () => {
  return (
    <section className="text-primary-white">
      Courses page
    </section>
  )
};

export default FeedbacksPage;
