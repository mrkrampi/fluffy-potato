import { Heading } from '@/components/markup/heading';
import { CarouselItem } from '@/components/ui/carousel';
import { CarouselWrapper } from '@/components/carousel-wrapper';
import { StudyGuideInterface } from '@/interfaces/study-guide.interface';
import { STUDY_GUIDE_LIST } from '@/app/(public)/courses/[courseSlug]/_consts';
import { StudyGuideCard } from '@/app/(public)/courses/[courseSlug]/_components/study-guide-card';
import { Section } from '@/components/markup/section';

export const StudyGuideSection = () => {
  return (
    <Section>
      <Heading className="text-[40px]">Як проходить навчання</Heading>
      <div className="w-full md:w-4/5 mx-auto md:mt-24 mt-16 lg:mt-44">
        <CarouselWrapper>
          {STUDY_GUIDE_LIST.map((item: StudyGuideInterface, index: number) =>
            (
              <CarouselItem key={item.id} className="px-2">
                <StudyGuideCard item={item} index={index + 1}/>
              </CarouselItem>
            ))}
        </CarouselWrapper>
      </div>
    </Section>
  );
};
