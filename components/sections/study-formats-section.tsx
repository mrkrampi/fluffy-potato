import { STUDY_FORMATS_LIST } from '@/consts/study-format';
import { StudyFormatInterface } from '@/interfaces/study-format.interface';
import { StudyFormatCard } from '@/components/cards/study-format-card';

interface StudyFormatCardProps {
  registerButton?: boolean;
}

export const StudyFormatsSection = ({ registerButton }: StudyFormatCardProps) => {
  return (
    <section className="w-full h-full px-2 lg:mx-5 md:mx-8">
      <div className="w-full xl:mx-auto">
        <div className="flex lg:w-full md:w-1/2">
          <h3
            className="w-full lg:min-w-full max-w-5xl uppercase text-primary-white text-5xl md:text-6xl xl:text-[6rem] leading-none font-normal font-unbounded -tracking-widest">
            Формати навчання
          </h3>
        </div>
        <div className="w-full flex mt-16 md:mt-20 xl:mt-40 gap-x-5 gap-y-14 xl:justify-center overflow-x-auto flex-col md:flex-row">
          {STUDY_FORMATS_LIST.map((item: StudyFormatInterface) =>
            (
              <StudyFormatCard key={item.id} studyFormat={item} registerButton={registerButton}/>
            ))}
        </div>
      </div>
    </section>
  );
};
