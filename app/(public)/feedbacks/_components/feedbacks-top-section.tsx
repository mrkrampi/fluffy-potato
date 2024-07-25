import Image from 'next/image';

import { Heading } from '@/components/markup/heading';
import { Section } from '@/components/markup/section';

import feedbackImage1 from '@/public/feedback/feedback-image-1.webp';
import feedbackImage2 from '@/public/feedback/feedback-image-2.webp';

export const FeedbacksTopSection = () => {
  return (
    <Section className="relative pb-0 overflow-hidden mx-0 max-w-full md:max-w-full">
      <div className="relative z-10 flex flex-col justify-center items-center mt-16 md:mt-0">
        <Heading className="text-[40px] text-center">
          ЩО КАЖУТЬ<br/>СТУДЕНТИ?
        </Heading>

        <p className="w-3/4 md:w-full text-primary-blue font-medium lg:text-2xl mt-10 lg:mt-[64px] text-center">
          [ Список відгуків від учнів Niko&nbsp;IT&nbsp;Academy ]
        </p>
      </div>

      <div className="absolute -right-12 lg:right-0 top-52 md:top-16 lg:top-[400px] w-[142px] h-[142px] lg:w-[362px] lg:h-[362px]">
        <Image
          src={feedbackImage2}
          alt="Feedback image 2"
          fill
        />
      </div>

      <div className="absolute -left-16 md:left-5 top-36 md:top-[104px] w-[142px] h-[142px] lg:w-[362px] lg:h-[362px]">
        <Image
          src={feedbackImage1}
          alt="Feedback image 1"
          fill
        />
      </div>
    </Section>
  )
}
