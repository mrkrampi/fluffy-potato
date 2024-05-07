import { GoalsContainer } from '@/components/goals-container';
import { BENEFITS_FOR_STUDENTS_LIST } from '@/consts/benefits-for-students';
import { Heading } from '@/components/markup/heading';
import { Section } from '@/components/markup/section';

export const StudentsBenefitsSection = () => {
  return (
    <Section>
      <div className="max-w-[1600px] md:px-4 xl:px-0 xl:mx-auto w-full">
        <div className="w-full flex">
          <Heading>
            Переваги для студентів
          </Heading>
        </div>

        <GoalsContainer items={BENEFITS_FOR_STUDENTS_LIST}/>
      </div>
    </Section>
  );
};
