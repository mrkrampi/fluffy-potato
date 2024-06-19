import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.faqTitle,
  description: siteConfig.faqDescription,
  alternates: {
    canonical: `${process.env.BASE_URL}/faq`,
  }
};

const FaqPage = () => {
  return (
    <section className="text-primary-white">
      Courses page
    </section>
  )
};

export default FaqPage;
