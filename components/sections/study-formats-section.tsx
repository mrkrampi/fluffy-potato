import { courses } from '@/db/schema';
import { Section } from '@/components/markup/section';
import { Heading } from '@/components/markup/heading';
import { getStudyFormats } from '@/db/pricing-queries';
import { StudyFormatCard } from '@/components/cards/study-format-card';

interface StudyFormatCardProps {
  registerButton?: boolean;
  course?: typeof courses.$inferSelect;
}

export const StudyFormatsSection = async ({ registerButton, course }: StudyFormatCardProps) => {
  const studyFormatData = getStudyFormats();

  const [studyFormatsList] = await Promise.all([studyFormatData]);

  return (
    <Section>
      <div className="w-full xl:mx-auto">
        <div className="flex lg:w-full md:w-1/2">
          <Heading>
            Формати навчання
          </Heading>
        </div>

        <div
          className="w-full flex mt-16 md:mt-20 xl:mt-40 gap-x-5 gap-y-14 overflow-x-auto flex-col md:flex-row md:max-w-[calc(100vw-64px)] max-w-[calc(100vw-32px)]">
          {studyFormatsList.map((studyFormat) =>
            (<StudyFormatCard
              key={studyFormat.id}
              studyFormat={studyFormat}
              registerButton={registerButton}
              course={course}
            />))}
        </div>
      </div>

      {
        registerButton && (
          <div className="mx-auto max-w-screen-2xl mt-12 md:mt-20 lg:my-40">
            <div
              className="mx-2 md:mx-8 px-4 md:px-8 text-primary-white bg-primary-blue rounded-3xl font-unbounded text-2xl lg:text-5xl py-5 md:py-8 text-center">
              + 8 занять з англійської мови безкоштовно для учнів групового курсу
            </div>
          </div>
        )
      }
    </Section>
  );
};
