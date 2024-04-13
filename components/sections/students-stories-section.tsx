import { STUDENT_STORIES_LIST } from '@/consts/student-stories';
import { StudentStoryInterface } from '@/interfaces/student-story.interface';
import { StudentStoryCard } from '@/components/student-story-card';

export const StudentsStoriesSection = () => {
  return (
    <section
      className="w-full h-full my-48 pt-36 bg-[url('https://www.figma.com/file/5uFaXOoQkT07VmhMglqTZL/image/b5a247f08cb20f3ea0b74f55eb5ec8a9663e7a38')] bg-center bg-cover relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#040309] from-55% to-[#040309] to-90% opacity-80"/>
      <div className="max-w-screen-2xl w-full mx-auto z-10 relative">
        <div className="w-full flex">
          <h1 className="max-w-5xl uppercase text-primary-white text-[6.5rem] leading-none font-medium tracking-tighter">
            Історіїї успіху випускників
          </h1>
        </div>
        <div className="w-full flex flex-wrap gap-y-24 my-40 gap-x-6 justify-center">
          {STUDENT_STORIES_LIST.map((story: StudentStoryInterface) => {
            return (
              <StudentStoryCard story={story} key={story.id}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};
