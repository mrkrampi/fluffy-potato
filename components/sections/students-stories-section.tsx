import { Section } from '@/components/markup/section';
import { getFeedbacks } from '@/db/feedbacks-queries';
import { Heading } from '@/components/markup/heading';
import { StudentStoryCard } from '@/components/cards/student-story-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const StudentsStoriesSection = async () => {
  const feedbacksData = getFeedbacks();

  const [feedbacks] = await Promise.all([feedbacksData]);

  return (
    <Section
      className="bg-center bg-cover relative px-0 md:pb-[76px] lg:pb-[176px]">
      <div className="w-full z-10 relative">
        <div className="w-full flex md:w-1/2 lg:w-full">
          <Heading level={3} className="lg:whitespace-nowrap">
            Відгуки студентів
          </Heading>
        </div>

        <div className="my-16 md:my-0 md:mt-20 xl:mt-40 mx-auto md:max-w-[calc(100vw-64px)] max-w-[calc(100vw-32px)]">
          <Carousel
            opts={{
              loop: true,
              align: 'start',
            }}
          >
            <CarouselContent className="ml-0 mb-6">
              {feedbacks.map((feedback) =>
                (
                  <CarouselItem key={feedback.id} className="px-2 md:px-3 md:basis-1/2 xl:basis-1/3">
                    <StudentStoryCard feedback={feedback}/>
                  </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious
              size="xlg"
              variant="link"
              className="left-0 md:-top-24 md:left-[unset] xl:top-1/2 md:right-20 xl:-left-32 -bottom-16"
              arrow={<span
                className="h-1 min-w-16 xl:min-w-24 bg-primary-white relative before:absolute before:w-4 before:h-4 before:left-0 md:before:left-0 before:border-b-4 before:border-l-4 before:border-primary-white before:rotate-45 before:top-0.5 before:-translate-y-1/2"></span>}
            />

            <CarouselNext
              size="xlg"
              variant="link"
              className="right-0 md:-top-24 xl:-right-32 xl:top-1/2 -bottom-16"
              arrow={<span
                className="h-1 min-w-16 xl:min-w-24 bg-primary-white relative before:absolute before:w-4 before:h-4 before:right-0 md:before:right-0 before:border-t-4 before:border-r-4 before:border-primary-white before:rotate-45 before:top-0.5 before:-translate-y-1/2"></span>}
            />
          </Carousel>
        </div>
      </div>
    </Section>
  );
};
