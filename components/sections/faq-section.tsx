import { getFaqs } from '@/db/faq-queries';
import { Section } from '@/components/markup/section';
import { FaqList } from '@/components/faq-list';

export const FaqSection = async () => {
  const faqData = getFaqs();

  const [faqList] = await Promise.all([faqData]);

  return (
    <Section className="pb-9 md:pb-14 lg:pb-[152px]">
      <div className="max-w-[1612px] w-full xl:px-0 xl:mx-auto">
        <div
          className="w-full flex flex-col md:grid md:grid-cols-2 xl:grid-cols-[3fr_1fr_3fr] justify-between md:items-center flex-wrap xl:gap-x-8 gap-y-8 md:gap-x-5">
          <h3
            className="max-w-5xl uppercase text-primary-white text-5xl lg:text-7xl md:text-6xl xl:text-[6.5rem] leading-none font-normal tracking-tighter font-unbounded">
            Ваші<br className="block md:hidden"/> питання
          </h3>

          <div
            className="md:ml-0 xl:mr-0 h-14 md:h-1.5 w-0.5 md:w-full md:max-w-24 xl:max-w-52 bg-primary-blue relative before:absolute before:border-primary-blue before:border-b-[3px] before:border-r-[3px] before:w-3 before:h-3 md:before:border-b-0 md:before:border-t-[6px] md:before:border-r-[6px] md:before:w-12 md:before:h-12 before:right-1/2 before:translate-x-1/2 md:before:translate-x-0 md:before:right-1 before:rotate-45 before:bottom-0 md:before:-top-5 md:before:rounded mx-auto"/>

          <h3
            className="lg:max-w-5xl md:col-span-2 xl:col-span-1 uppercase text-primary-white text-5xl lg:text-7xl md:text-6xl xl:text-[6.5rem] leading-none font-normal tracking-tighter md:max-w-[50%] md:ml-auto font-unbounded">
            Наші<br className="block md:hidden"/> відповіді
          </h3>
        </div>

        <div className="w-full mt-12 md:mt-40 lg:mt-36">
          <FaqList items={faqList}/>
        </div>
      </div>
    </Section>
  );
};
