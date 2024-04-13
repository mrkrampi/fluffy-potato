import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="bg-hero-pattern min-h-[115vh] h-full w-full bg-no-repeat bg-cover bg-center flex flex-col justify-between rounded-3xl">
      <Header/>
      <div className="max-w-screen-2xl mx-auto w-full h-full">
        <div className="max-h-[860px] max-w-5xl h-full flex flex-col justify-center">
          <p className="text-primary-white text-4xl">
            Онлайн курси для розвитку твоєї кар’єри в IT
          </p>
          <h1 className="uppercase text-primary-white text-[6.5rem] leading-none font-medium py-12 -tracking-widest">
            niko it academy
          </h1>
          <p className="text-primary-white text-2xl font-medium">
            Наша онлайн платформа - це ваш шанс спробувати себе в IT - професіях та отримати практику на прикладах з реальних робочих
            задач
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="max-w-lg w-full flex justify-center items-center">
          <div className="rounded-tl-3xl w-full bg-primary-black relative flex justify-center py-4">
            <Button
              size="5xl"
              variant="outline"
              className="bg-transparent text-primary-white text-3xl font-bold"
            >
              Дізнатись більше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
