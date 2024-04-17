import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="bg-hero-pattern min-h-screen h-full w-full bg-no-repeat bg-cover bg-center flex flex-col justify-between rounded-3xl">
      <div className="max-w-screen-[1600px] px-4 md:px-8 mx-auto w-full h-full my-auto">
        <div className="max-h-[860px] max-w-5xl h-full flex flex-col justify-center">
          <p className="text-primary-white md:text-2xl xl:text-4xl font-medium">
            Онлайн курси для розвитку твоєї кар’єри в IT
          </p>
          <h1 className="uppercase text-primary-white text-6xl xl:text-[6.5rem] leading-none font-medium py-8 xl:py-12 -tracking-widest">
            niko it academy
          </h1>
          <p className="text-primary-white md:text-xl xl:text-2xl font-medium md:w-3/4 tracking-tighter">
            Наша онлайн платформа - це ваш шанс спробувати себе в IT - професіях та отримати практику на прикладах з реальних робочих
            задач
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end relative -bottom-0.5">
        <div className="flex justify-center items-center">
          <div className="rounded-tl-3xl w-full bg-primary-black relative flex justify-center p-2 xl:px-8 md:px-6 md:py-2 xl:py-4">
            <Button
              size="5xl"
              variant="outline"
              className="bg-transparent text-primary-white text-base md:text-xl xl:text-3xl font-bold md:h-[72px] py-3 px-6 md:py-6 md:px-16"
            >
              Дізнатись більше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
