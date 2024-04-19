import { CarouselItem } from '@/components/ui/carousel';
import { CarouselWrapper } from '@/components/carousel-wrapper';
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
        <div className="hidden w-full lg:grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-y-14 my-40 gap-x-9">
          {BENEFITS_FOR_STUDENTS_LIST.map((benefit: string, index: number) => {
            return (
              <div key={benefit} className="w-full flex flex-col gap-y-8 max-w-md">
                <p className="text-xl font-medium text-primary-gray">[ {index + 1} ]</p>
                <p className="text-primary-white font-medium text-2xl tracking-tight">{benefit}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:hidden md:w-2/3 mx-auto mt-16 md:mt-28">
          <CarouselWrapper>
            {BENEFITS_FOR_STUDENTS_LIST.map((benefit: string, index: number) => {
              return (
                <CarouselItem key={benefit} className="justify-center px-2 md:p-0">
                  <div className="w-full flex flex-col gap-y-8 max-w-md mx-auto">
                    <p className="text-xl font-medium text-primary-gray">[ {index + 1} ]</p>
                    <p className="text-primary-white font-medium text-2xl tracking-tight">{benefit}</p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselWrapper>
        </div>
      </div>
    </section>
  );
};
