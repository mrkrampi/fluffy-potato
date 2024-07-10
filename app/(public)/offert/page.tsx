import { Section } from '@/components/markup/section';
import { DESCRIPTION, LIST, TITLE } from '@/app/(public)/offert/_const';
import { TermsList } from '@/app/(public)/offert/_components/terms-list';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.offertTitle,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/offert`,
  }
};

const OffertPage = () => {
  return (
    <Section className="lg:max-w-screen-2xl mx-8 h-fit lg:py-8 md:py-8 py-8 mt-28 text-primary-white">
      <h1 className="text-2xl">{TITLE}</h1>
      <p>{DESCRIPTION}</p>

      <TermsList items={LIST} isHeading/>
    </Section>
  );
};

export default OffertPage;
