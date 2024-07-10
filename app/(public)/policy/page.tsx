import { Section } from '@/components/markup/section';
import { DESCRIPTION, GRATITUDE, PARAGRAPHS, QUESTIONS_PARAGRAPH, TITLE } from '@/app/(public)/policy/_const';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.policyTitle,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/policy`,
  }
};

const PolicyPage = () => {
  return (
    <Section className="lg:max-w-screen-2xl mx-8 h-fit lg:py-8 md:py-8 py-8 mt-28 text-primary-white">
      <h1 className="text-2xl">{TITLE}</h1>
      <p>{DESCRIPTION}</p>

      {
        PARAGRAPHS.map(({ title, content }, index) => ((
          <div key={title} className="my-5">
            <p className="font-bold">{index + 1}. {title}</p>
            <p>{content}</p>
          </div>
        )))
      }

      <p className="my-5">{QUESTIONS_PARAGRAPH}</p>

      <p className="my-5">{GRATITUDE}</p>
    </Section>
  );
};

export default PolicyPage;
