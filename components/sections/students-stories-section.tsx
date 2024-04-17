import { CarouselItem } from '@/components/ui/carousel';
import { STUDENT_STORIES_LIST } from '@/consts/student-stories';
import { CarouselWrapper } from '@/components/carousel-wrapper';
import { StudentStoryCard } from '@/components/student-story-card';
import { StudentStoryInterface } from '@/interfaces/student-story.interface';

export const StudentsStoriesSection = () => {
  return (
    <section
      className="w-full h-full bg-[url('https://www.figma.com/file/5uFaXOoQkT07VmhMglqTZL/image/b5a247f08cb20f3ea0b74f55eb5ec8a9663e7a38')] bg-center bg-cover relative px-3 md:px-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#040309] from-55% to-[#040309] to-90% opacity-80"/>
      <div className="max-w-[1600px] md:px-4 xl:px-0 xl:mx-auto w-full z-10 relative">
        <div className="w-full flex">
          <h1
            className="max-w-5xl xl:w-full md:w-3/2 uppercase text-primary-white text-4xl md:text-6xl xl:text-[6.5rem] leading-none font-normal font-unbounded tracking-tighter">
            Історіїї успіху випускників
          </h1>
        </div>
        <div className="hidden w-full md:flex gap-y-24 md:mt-20 xl:mt-40 gap-x-6 xl:justify-center overflow-x-auto">
          {STUDENT_STORIES_LIST.map((story: StudentStoryInterface) => {
            return (
              <StudentStoryCard story={story} key={story.id}/>
            );
          })}
        </div>
        <div className="md:hidden my-16">
          <CarouselWrapper>
            {STUDENT_STORIES_LIST.map((story: StudentStoryInterface) => {
              return (
                <CarouselItem key={story.id} className="px-2 md:p-0">
                  <StudentStoryCard story={story}/>
                </CarouselItem>
              );
            })}
          </CarouselWrapper>
        </div>
      </div>
    </section>
  );
};
