import { Section } from '@/components/markup/section';
import { BlurredParagraph } from '@/components/markup/blurred-paragraph';

export const AboutUsSection = () => {
  return (
    <Section className="flex flex-col md:flex-row gap-y-8 md:gap-4 lg:gap-14 lg:items-center relative z-10">
      <h2 className="uppercase text-primary-accent text-[104px] md:text-[6.5rem] xl:text-[220px] leading-none font-unbounded font-medium lg:w-1/2">
        Про нас
      </h2>
      <BlurredParagraph className="font-medium lg:text-2xl">
        Niko IT Academy це українсько - канадська онлайн академія заснована у 2020 році викладачем та експертом в IT індустрії - Наталією Яцишинець. Головна ціль академії - надати студентам шанс отримати цінний досвід та створити власний проєкт, під керівництвом досвідчених менторів та практикуючих ІТ-спеціалістів. Ми слідкуємо за розвитком та тенденціями ринку, для випуску цінних фахівців у своїй галузі, а також даємо найбільш корисну інформацію, яка у майбутньому допомагає студентам отримати бажану роботу.
        <br/>
        <br/>
        В умовах постійних змін та викликів ми забезпечуємо нашим студентам стійкість та гнучкість, необхідні для успіху у сучасній IT-сфері. Наша школа відмінно справляється з поставленою задачею, адже 90% студентів отримують роботу у найкоротший час. Ми підтримуємо наших студентів, допомагаємо досягти успіху та випускаємо на ринок праці професіоналів.
      </BlurredParagraph>
    </Section>
  );
};
