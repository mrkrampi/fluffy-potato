import { StudentStoryInterface } from '@/interfaces/student-story.interface';
import Image from 'next/image';

interface StudentStoryCardProps {
  story: StudentStoryInterface;
}

export const StudentStoryCard = ({ story }: StudentStoryCardProps) => {
  return (
    <div className="w-full h-full bg-[#191821] rounded-3xl px-8 md:px-6 pt-8 pb-14 flex flex-col justify-center items-center">
      <div className="rounded-full relative w-28 h-28">
        <Image
          src={story.image}
          alt=""
          fill
          className="object-cover object-center rounded-full"
        />
        <div className="absolute -bottom-2 right-0 bg-primary-blue rounded-full w-8 h-8">
          <Image
            src="feedback/quotes.svg"
            alt="Quotes"
            fill
            className="object-none"
          />
        </div>
      </div>
      <div className="md:mt-14 lg:text-4xl tracking-tight text-primary-white">
        {story.name}
      </div>
      <div className="w-full h-0.5 bg-primary-blue mt-6 mb-8"/>
      <div className="text-primary-white text-xl text-center">
        {story.story}
      </div>
    </div>
  );
};
