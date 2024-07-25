import Image from 'next/image';
import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { feedbacks } from '@/db/schema';
import { QuoteOutlined } from '@/components/drawings/quote-outlined';
import { FeedbackRating } from '@/app/(public)/feedbacks/_components/feedback-rating';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';

type Props = {
  feedbacksList: Array<typeof feedbacks.$inferSelect>;
  selectedFeedbackId?: (typeof feedbacks.$inferSelect)['id'];
}

export const FeedbackPreview = ({ feedbacksList, selectedFeedbackId }: Readonly<Props>) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    const selectedFeedbackIndex = feedbacksList.findIndex(({ id }) => id === selectedFeedbackId);
    api?.scrollTo(selectedFeedbackIndex);
  }, [selectedFeedbackId]);

  const getCarouselItems = () => {
    return feedbacksList.map((feedbackItem) => {
      return (
        <CarouselItem key={feedbackItem.id}>
          <div className="flex justify-center gap-12">
            <div className="rounded-full border-2 border-primary-blue relative min-w-[188px] h-[188px]">
              <Image
                src={feedbackItem.imageUrl}
                alt={feedbackItem.imageAlt}
                fill
                className="object-cover object-center rounded-full"
              />
            </div>

            <div className="flex flex-col gap-5 text-primary-white max-w-[724px]">
              <p className="text-4xl">{feedbackItem.name}</p>

              <FeedbackRating rating={feedbackItem.rating}/>

              <p className="text-2xl font-medium">
                {feedbackItem.feedback}
              </p>
            </div>
          </div>
        </CarouselItem>
      );
    });
  };

  return (
    <div className="relative">
      <div className="absolute -top-16 -left-12">
        <QuoteOutlined/>
      </div>

      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 8e3,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent>
          {getCarouselItems()}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
