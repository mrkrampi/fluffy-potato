import Image from 'next/image';
import { COURSES_LIST } from '@/consts/courses';
import { CourseInterface } from '@/interfaces/course.interface';
import { CourseCard } from '@/components/course-card';

export const CourseSection = () => {
  return (
    <section className="w-full h-full pt-36 px-4 md:pb-[500px] bg-center bg-cover bg-course-pattern rounded-3xl">
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="w-full flex justify-between">
          <h1 className="max-w-5xl uppercase text-primary-black text-[6.5rem] leading-none font-medium tracking-[-10px]">
            Легкий шлях до&nbsp;професії мрії
          </h1>
          <div className="w-16 h-12 relative mt-auto">
            <Image
              src="/arrow.svg"
              alt="Arrow"
              fill
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-8 md:mt-40">
          {COURSES_LIST.map((course: CourseInterface) => (<CourseCard key={course.id} course={course}/>))}
        </div>
      </div>
    </section>
  );
};
