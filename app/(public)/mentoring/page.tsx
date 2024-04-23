import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.mentoringTitle,
  description: siteConfig.mentoringDescription,
};

const MentoringPage = () => {
  return (
    <section className="text-primary-white">
      <h1>
        Mentoring page
      </h1>
    </section>
  )
}

export default MentoringPage;
