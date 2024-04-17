import { StudentStoryInterface } from '@/interfaces/student-story.interface';
import Image from 'next/image';

interface StudentStoryCardProps {
  story: StudentStoryInterface;
}

export const StudentStoryCard = ({ story }: StudentStoryCardProps) => {
  return (
    <div className="w-full h-full max-w-md md:min-w-96 xl:min-w-px">
      <div
        style={{ backgroundImage: `url("${story.image}")` }}
        className="w-full h-[440px] bg-center bg-cover rounded-3xl relative">
        <div className="absolute -bottom-0.5 w-1/3 h-20 bg-primary-black rounded-tr-3xl rounded-bl-3xl">
          <Image
            src={story.companyImage}
            alt="Company Name"
            fill
            className="object-contain p-3 -bottom-12 relative"
          />
        </div>
      </div>
      <div className="text-primary-white text-4xl mt-12 font-unbounded">
        {story.name}
      </div>
      <div className="text-primary-white text-2xl mt-6 mb-8 font-medium">
        {story.position}
      </div>
      <div className="my-4 text-primary-white text-lg">
        {story.story}
      </div>
    </div>
  );
};
