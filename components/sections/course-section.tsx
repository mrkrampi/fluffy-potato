import Image from 'next/image';

import { Heading } from '@/components/markup/heading';
import { CarouselItem } from '@/components/ui/carousel';
import { CourseCard } from '@/components/cards/course-card';
import { CarouselWrapper } from '@/components/carousel-wrapper';

import arrowBlack from '@/public/arrows/black.svg';
import { Section } from '@/components/markup/section';
import { getAllCourses } from '@/db/course-queries';

export const CourseSection = async () => {
  const coursesData = getAllCourses();

  const [
    coursesList
  ] = await Promise.all([
    coursesData
  ]);

  return (
    <Section className="md:max-w-[calc(100vw-16px)] lg:px-4 lg:pt-[120px]">
      <div className="max-w-[1600px] w-full mx-auto px-6 py-12 lg:py-[220px] md:px-8 md:pb-[350px] bg-center bg-cover bg-course-pattern rounded-3xl">
        <div className="w-full flex justify-between items-center xl:items-end gap-12">
          <Heading className="text-primary-black text-[32px] leading-[1]">
            Легкий шлях до професії мрії
          </Heading>

          <Image
            src={arrowBlack}
            alt="Arrow"
            className="min-w-12 h-[38px] md:min-w-[50px] md:min-h-[38px] lg:min-w-16 lg:min-h-12 relative"
          />
        </div>

        <div className="hidden md:flex flex-col gap-y-8 mt-10 md:mt-20 xl:mt-40">
          {coursesList.map((course) => (<CourseCard key={course.id} course={course}/>))}
        </div>

        <div className="md:hidden mt-10 mb-28">
          <CarouselWrapper opts={{ loop: false }}>
            {coursesList.map((course) => (
              <CarouselItem key={course.id} className="px-2">
                <CourseCard course={course}/>
              </CarouselItem>
            ))}
          </CarouselWrapper>
        </div>
      </div>
    </Section>
  );
};
