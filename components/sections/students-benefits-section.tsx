import { BENEFITS_FOR_STUDENTS_LIST } from '@/consts/benefits-for-students';

export const StudentsBenefitsSection = () => {
  return (
    <section className="w-full h-full pt-36">
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="w-full flex">
          <h1 className="max-w-5xl uppercase text-primary-white text-[6.5rem] leading-none font-medium tracking-tighter">
            Переваги для студентів
          </h1>
        </div>
        <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-24 my-40 gap-x-9">
          {BENEFITS_FOR_STUDENTS_LIST.map((benefit: string, index: number) => {
            return (
              <div key={benefit} className="w-full flex flex-col gap-y-8 max-w-md">
                <p className="text-xl font-medium text-primary-gray">[ {index + 1} ]</p>
                <p className="text-primary-white font-medium text-2xl tracking-tight">{benefit}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
