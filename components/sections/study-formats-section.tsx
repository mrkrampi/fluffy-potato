import { STUDY_FORMATS_LIST } from '@/consts/study-format';
import { StudyFormatInterface } from '@/interfaces/study-format.interface';
import { StudyFormatCard } from '@/components/cards/study-format-card';
import { Section } from '@/components/markup/section';
import { Heading } from '@/components/markup/heading';

interface StudyFormatCardProps {
  registerButton?: boolean;
}

export const StudyFormatsSection = ({ registerButton }: StudyFormatCardProps) => {
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
          {STUDY_FORMATS_LIST.map((item: StudyFormatInterface) =>
            (<StudyFormatCard
              key={item.id}
              studyFormat={item}
              registerButton={registerButton}
            />))}
        </div>
      </div>

      {
        registerButton && (
          <div className="mx-auto max-w-screen-2xl mt-12 md:mt-20 lg:my-40">
            <div
              className="mx-2 md:mx-8 px-4 md:px-8 text-primary-white bg-primary-blue rounded-3xl font-unbounded text-2xl lg:text-5xl py-5 md:py-8 text-center">
              + 8 заняття з англійської мови безкоштовно для учнів групового курсу
            </div>
          </div>
        )
      }
    </Section>
  );
};
