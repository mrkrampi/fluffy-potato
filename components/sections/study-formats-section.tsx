import { STUDY_FORMATS_LIST } from '@/consts/study-format';
import { StudyFormatInterface } from '@/interfaces/study-format.interface';
import { StudyFormatCard } from '@/components/study-format-card';

export const StudyFormatsSection = () => {
  return (
    <section className="w-full h-full pt-36">
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="w-full flex justify-center">
          <h1 className="max-w-5xl uppercase text-primary-white text-[6.5rem] leading-none font-medium tracking-[-10px]">
            Формати навчання
          </h1>
        </div>
        <div className="w-full flex my-40 gap-x-5 justify-center">
          {STUDY_FORMATS_LIST.map((item: StudyFormatInterface) => {
            return (
              <StudyFormatCard key={item.id} studyFormat={item}/>
            )
          })}
        </div>
      </div>
    </section>
  );
};
