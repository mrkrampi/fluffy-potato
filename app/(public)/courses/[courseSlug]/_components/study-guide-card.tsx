import Image from 'next/image';

import { StudyGuideInterface } from '@/interfaces/study-guide.interface';

interface StudyGuideCardProps {
  item: StudyGuideInterface;
  index: number;
}

export const StudyGuideCard = ({ item, index }: StudyGuideCardProps) => {
  return (
    <div className="flex items-center justify-between gap-5 flex-col lg:flex-row">
      <div className="relative h-96 lg:h-[411px] w-full lg:w-1/2">
        <Image src={item.imageUrl} alt="Study Guide" fill className="object-cover"/>
      </div>
      <div className="flex flex-col gap-y-8 lg:gap-y-12 lg:w-1/2">
        <p className="text-primary-gray font-semibold text-xl md:text-3xl">[ {index} ]</p>
        <div>
          <p className="text-primary-accent text-3xl md:text-4xl">
            {item.title}
          </p>
          <p className="mt-8 md:mt-12 lg:mt-14 text-primary-white text-xl font-medium">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
