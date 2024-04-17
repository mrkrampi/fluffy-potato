import { STUDY_FORMATS_LIST } from '@/consts/study-format';
import { StudyFormatInterface } from '@/interfaces/study-format.interface';
import { StudyFormatCard } from '@/components/study-format-card';

export const StudyFormatsSection = () => {
  return (
    <section className="w-full h-full px-2 md:px-0">
      <div className="max-w-screen-2xl w-full md:px-6 xl:px-0 xl:mx-auto">
        <div className="flex xl:justify-center xl:w-full md:w-1/2">
          <h1 className="max-w-5xl uppercase text-primary-white text-5xl md:text-6xl xl:text-[6.5rem] leading-none font-normal font-unbounded -tracking-widest">
            Формати навчання
          </h1>
        </div>
        <div className="w-full flex mt-16 md:mt-20 xl:mt-40 gap-x-5 gap-y-14 xl:justify-center overflow-x-auto flex-col md:flex-row">
          {STUDY_FORMATS_LIST.map((item: StudyFormatInterface) =>
            (
              <StudyFormatCard key={item.id} studyFormat={item}/>
            ))}
        </div>
      </div>
    </section>
  );
};
