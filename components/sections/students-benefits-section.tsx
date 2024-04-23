import { GoalsContainer } from '@/components/goals-container';
import { BENEFITS_FOR_STUDENTS_LIST } from '@/consts/benefits-for-students';

export const StudentsBenefitsSection = () => {
  return (
    <section className="w-full h-full px-2 pb-20 md:pb-0 md:px-0">
      <div className="max-w-[1600px] md:px-4 xl:px-0 xl:mx-auto w-full">
        <div className="w-full flex">
          <h3
            className="max-w-5xl xl:w-full md:w-3/2 uppercase text-primary-white text-5xl md:text-6xl xl:text-[6.5rem] leading-none font-normal font-unbounded tracking-tighter">
            Переваги для студентів
          </h3>
        </div>
        <GoalsContainer items={BENEFITS_FOR_STUDENTS_LIST}/>
      </div>
    </section>
  );
};
