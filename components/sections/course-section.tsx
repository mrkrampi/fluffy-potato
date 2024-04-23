import Image from 'next/image';
import { COURSES_LIST } from '@/consts/courses';
import { CourseInterface } from '@/interfaces/course.interface';
import { CourseCard } from '@/components/course-card';
import { CarouselWrapper } from '@/components/carousel-wrapper';
import { CarouselItem } from '@/components/ui/carousel';

export const CourseSection = () => {
  return (
    <section className="w-full h-full pt-12 lg:pt-24 xl:pt-56 px-4 pb-4 md:pb-[426px] xl:pb-[572px] bg-center bg-cover bg-course-pattern rounded-3xl">
      <div className="max-w-[1600px] w-full mx-auto md:px-8">
        <div className="w-full flex justify-between md:items-center xl:items-end">
          <h2
            className="max-w-5xl uppercase text-primary-black text-3xl md:text-6xl xl:text-[6.5rem] leading-none font-normal font-unbounded tracking-tight">
            Легкий шлях до&nbsp;професії мрії
          </h2>
          <div className="w-16 h-12 relative">
            <Image
              src="/arrows/black.svg"
              alt="Arrow"
              fill
            />
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-y-8 mt-10 md:mt-20 xl:mt-40">
          {COURSES_LIST.map((course: CourseInterface) => (<CourseCard key={course.id} course={course}/>))}
        </div>
        <div className="md:hidden mt-10 mb-40">
          <CarouselWrapper opts={{ loop: false }}>
            {COURSES_LIST.map((course: CourseInterface) => (
              <CarouselItem key={course.id} className="px-2">
                <CourseCard course={course}/>
              </CarouselItem>
            ))}
          </CarouselWrapper>
        </div>
      </div>
    </section>
  );
};
