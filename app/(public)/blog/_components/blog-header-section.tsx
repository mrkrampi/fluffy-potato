import Image from 'next/image';

import { Heading } from '@/components/markup/heading';
import { Section } from '@/components/markup/section';

import blogImage1 from '@/public/blog/blog-image-1.svg';
import blogImage2 from '@/public/blog/blog-image-2.svg';

export const BlogHeaderSection = () => {
  return (
    <Section className="relative pb-0 overflow-hidden mx-0 max-w-full md:max-w-full">
      <div className="relative z-10 flex flex-col justify-center items-center mt-16">
        <Heading className="text-[40px]">
          Блог
        </Heading>

        <p className="text-primary-blue font-medium lg:text-2xl mt-10 lg:mt-[72px] text-center">
          [ Експертні статті та поради з IT, щоб розкрити ваш потенціал ]
        </p>
      </div>

      <div className="absolute -right-12 lg:right-0 top-16 lg:top-[200px] w-[142px] h-[142px] lg:w-[362px] lg:h-[362px]">
        <Image
          src={blogImage1}
          alt="Blog image 1"
          fill
        />
      </div>

      <div className="absolute -left-12 top-20 w-[142px] h-[142px] lg:w-[362px] lg:h-[362px]">
        <Image
          src={blogImage2}
          alt="Blog image 2"
          fill
        />
      </div>
    </Section>
  )
}
