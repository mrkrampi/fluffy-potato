import Image from 'next/image';

import { Heading } from '@/components/heading';
import { CarouselItem } from '@/components/ui/carousel';
import { CarouselWrapper } from '@/components/carousel-wrapper';
import studyGuide from '@/public/courses/study-guide.png';

export const StudyGuideSection = () => {
  return (
    <section className="lg:mx-5 md:mx-8">
      <Heading>Як проходить навчання</Heading>
      <div className="w-3/4 mx-auto md:my-24 lg:my-44">
        <CarouselWrapper>
          <CarouselItem>
            <div className="flex items-center justify-between gap-5 flex-col lg:flex-row">
              <div className="relative h-96 lg:h-[411px] w-full lg:w-1/2">
                <Image src={studyGuide} alt="Study Guide" fill className="object-cover"/>
              </div>
              <div className="flex flex-col gap-y-8 lg:gap-y-12 lg:w-1/2">
                <p className="text-primary-gray font-semibold text-3xl">[ 1 ]</p>
                <div>
                  <p className="text-primary-accent text-4xl">
                    Отримуєте та вивчайте навчальні матеріали у персональному кабінеті
                  </p>
                  <p className="md:mt-12 lg:mt-14 text-primary-white text-xl font-medium">
                    Заняття включають в себе відеолекції, вебінари та практичні завдання. Ви займаєтесь по розкладу, але завжди будете мати змогу повернутись на початок, або передивитись лекцію в записі. Записи лекцій зберігаються 1 рік.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselWrapper>
      </div>
    </section>
  )
}
