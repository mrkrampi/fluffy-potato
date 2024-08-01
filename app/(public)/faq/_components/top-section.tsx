import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/markup/section';
import { Heading } from '@/components/markup/heading';
import { IFaqCategory } from '@/interfaces/model-types';

import feedbackImage2 from '@/public/feedback/feedback-image-2.webp';
import feedbackImage1 from '@/public/feedback/feedback-image-1.webp';

type Props = {
  categories: Array<IFaqCategory>;
}

export const TopSection = ({ categories }: Readonly<Props>) => {
  const getCategoryButtons = () => {
    return categories.map((category: IFaqCategory) => {
      return (
        <Button
          asChild
          key={category.id}
          variant="ghost"
          size="2xl"
          className="font-semibold text-primary-white text-xl border-[3px] border-primary-white"
        >
          <Link href={'#' + category.id}>
            {category.name}
          </Link>
        </Button>
      );
    });
  };

  return (
    <Section className="relative overflow-hidden mx-0 max-w-full md:max-w-full lg:pb-0 md:pb-0 pb-0">
      <div className="relative z-10 flex flex-col justify-center items-center mt-16 md:mt-0">
        <Heading className="text-[40px] text-center">
          FAQ
        </Heading>

        <p className="w-3/4 md:w-full text-primary-blue font-medium lg:text-2xl mt-10 lg:mt-[64px] text-center">
          [ Найчастіші Ваші запитання і наші відповіді ]
        </p>

        <div className="my-16 flex flex-col gap-5 lg:max-w-96">
          {getCategoryButtons()}
        </div>
      </div>

      {/*<div className="absolute -right-12 lg:right-0 top-52 md:top-16 lg:top-[400px] w-[142px] h-[142px] lg:w-[362px] lg:h-[362px]">*/}
      {/*  <Image*/}
      {/*    src={feedbackImage2}*/}
      {/*    alt="Feedback image 2"*/}
      {/*    fill*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<div className="absolute -left-16 md:left-5 top-36 md:top-[104px] w-[142px] h-[142px] lg:w-[362px] lg:h-[362px]">*/}
      {/*  <Image*/}
      {/*    src={feedbackImage1}*/}
      {/*    alt="Feedback image 1"*/}
      {/*    fill*/}
      {/*  />*/}
      {/*</div>*/}
    </Section>
  );
};
