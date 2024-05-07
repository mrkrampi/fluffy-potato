import { Section } from '@/components/markup/section';
import { GoalsContainer } from '@/components/goals-container';
import { MENTORING_BENEFITS_LIST, MENTORING_BENEFITS_TITLE } from '@/app/(public)/mentoring/_consts';
import { Heading } from '@/components/markup/heading';

export const MentoringBenefitsSection = () => {
  return (
    <Section>
      <Heading className="text-center">{MENTORING_BENEFITS_TITLE}</Heading>
      <div
        className="mx-auto mt-6 md:mt-8 lg:mt-14 bg-primary-blue w-1 h-12 md:h-16 lg:h-20 relative before:border-r-4 before:border-b-4 before:border-primary-blue before:w-4 before:h-4 md:before:w-3 before:md:h-3 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:rotate-45"/>

      <GoalsContainer items={MENTORING_BENEFITS_LIST} className="lg:my-24 my-16"/>
    </Section>
  );
};
