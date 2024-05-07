import Image from 'next/image';

import { Quote } from '@/components/drawings/quote';
import { StudentStoryInterface } from '@/interfaces/student-story.interface';

interface StudentStoryCardProps {
  story: StudentStoryInterface;
}

export const StudentStoryCard = ({ story }: StudentStoryCardProps) => {
  return (
    <div
      className="w-full h-full bg-secondary-black group lg:hover:bg-primary-accent transition duration-75 cursor-pointer rounded-3xl px-8 md:px-6 pt-8 pb-14 flex flex-col justify-center items-center">
      <div className="rounded-full border-2 border-primary-blue lg:group-hover:border-primary-white relative w-28 h-28">
        <Image
          src={story.image}
          alt=""
          fill
          className="object-cover object-center rounded-full"
        />

        <div
          className="absolute -bottom-2 right-0 bg-primary-blue lg:group-hover:bg-primary-white rounded-full w-8 h-8 flex items-center justify-center">
          <Quote className="fill-primary-white lg:group-hover:fill-primary-blue"/>
        </div>
      </div>

      <div className="mt-10 md:mt-10 text-2xl md:text-4xl lg:text-4xl font-medium tracking-tight text-primary-white">
        {story.name}
      </div>

      <div className="w-full h-0.5 bg-primary-blue lg:group-hover:bg-primary-white mt-2 md:mt-4 mb-8"/>

      <div className="text-primary-white text-center">
        {story.story}
      </div>
    </div>
  );
};
