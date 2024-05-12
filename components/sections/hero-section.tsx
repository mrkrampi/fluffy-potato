import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

import heroBackground from '@/public/backgrounds/hero-background.webp';

export const HeroSection = () => {
  return (
    <section className="h-[623px] md:h-[887px] lg:h-[1098px] pt-20 md:pt-[104px] mx-auto bg-no-repeat flex flex-col justify-center rounded-3xl overflow-hidden relative w-[calc(100vw-16px)]">
      <Image
        src={heroBackground}
        alt="Background"
        fill
      />

      <div className="max-w-screen-[1600px] px-4 md:px-8 mx-auto w-full h-full my-auto z-10">
        <div className="max-h-[860px] max-w-5xl h-full flex flex-col justify-center">
          <p className="text-primary-white md:text-2xl xl:text-4xl font-semibold">
            Онлайн курси для розвитку твоєї кар’єри в IT
          </p>

          <h1 className="uppercase text-primary-white text-[58px] xl:text-[6.5rem] leading-none font-medium py-8 xl:py-12 tracking-tighter">
            niko it academy
          </h1>

          <p className="text-primary-white md:text-xl xl:text-2xl font-medium md:w-3/4 tracking-tighter">
            Наша онлайн платформа - це ваш шанс спробувати себе в IT - професіях та отримати практику на прикладах з реальних робочих
            задач
          </p>
        </div>
      </div>

      <div className="w-full flex justify-end relative -bottom-0.5 z-10">
        <div className="flex justify-center items-center">
          <div className="rounded-tl-3xl w-full bg-primary-black relative flex justify-center p-2 xl:px-8 md:px-6 md:py-2 xl:py-4">
            <Button
              asChild
              size="5xl"
              variant="outline"
              className="bg-primary-accent border-0 hover:text-primary-white text-primary-white text-base md:text-xl xl:text-3xl font-bold md:h-[72px] py-3 px-6 md:py-6 md:px-16 xl:h-20 rounded-full xl:px-14 xl:py-12"
            >
              <Link href="/courses">Обрати курс</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
