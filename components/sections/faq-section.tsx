import Image from 'next/image';

import { FAQ_QUESTIONS_LIST } from '@/consts/faq-questions';
import { FAQQuestion } from '@/interfaces/faq-question.interface';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FaqSection = () => {
  return (
    <section
      className="w-full h-full px-2 md:px-0">
      <div className="max-w-[1612px] w-full md:px-8 xl:px-0 xl:mx-auto">
        <div className="w-full flex flex-col md:grid md:grid-cols-2 xl:grid-cols-[3fr_1fr_3fr] justify-between md:items-center flex-wrap xl:gap-x-8 gap-y-8 md:gap-x-5">
          <h1 className="max-w-5xl uppercase text-primary-white text-5xl lg:text-7xl md:text-6xl xl:text-[6.5rem] leading-none font-normal tracking-tighter font-unbounded">
            Ваші<br className="block md:hidden"/> питання
          </h1>
          <div
            className="md:ml-0 xl:mr-0 h-14 md:h-1.5 w-0.5 md:w-full md:max-w-24 xl:max-w-52 bg-primary-blue relative before:absolute before:border-primary-blue before:border-b-[3px] before:border-r-[3px] before:w-3 before:h-3 md:before:border-b-0 md:before:border-t-[6px] md:before:border-r-[6px] md:before:w-12 md:before:h-12 before:right-1/2 before:translate-x-1/2 md:before:translate-x-0 md:before:right-1 before:rotate-45 before:bottom-0 md:before:-top-5 md:before:rounded mx-auto"/>
          <h1 className="lg:max-w-5xl md:col-span-2 xl:col-span-1 uppercase text-primary-white text-5xl lg:text-7xl md:text-6xl xl:text-[6.5rem] leading-none font-normal tracking-tighter md:max-w-[50%] md:ml-auto font-unbounded">
            Наші<br className="block md:hidden"/> відповіді
          </h1>
        </div>
        <div className="w-full mt-12 md:mt-40">
          <Accordion type="multiple" className="w-full border-none">
            {FAQ_QUESTIONS_LIST.map((item: FAQQuestion) => {
              return (
                <AccordionItem key={item.id} value={`item-${item.id}`} className="my-2">
                  <AccordionTrigger hideChevron className="hover:no-underline">
                    <div className="flex items-center gap-x-5 md:gap-x-6">
                      <div className="md:max-w-20 xl:max-w-28 min-w-12 md:w-full md:h-28 h-9 relative">
                        <Image src="faq-question.svg" alt="Faq Question" fill/>
                      </div>
                      <div
                        className="bg-[#191821] p-4 md:px-10 md:py-7 rounded-2xl font-medium text-sm md:text-lg lg:text-2xl text-primary-white text-left">
                        {item.question}
                      </div>
                      <div className="relative min-w-6 min-h-6 md:w-12 md:h-12 trigger transition-transform duration-200">
                        <Image src="white-arrow.svg" alt="Faq Question Trigger" fill/>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-row-reverse items-center gap-x-5 md:gap-x-6 my-12">
                      <div className="md:max-w-20 xl:max-w-28 min-w-12 md:w-full md:h-28 h-9 relative">
                        <Image src="faq-response.svg" alt="Faq Question" fill/>
                      </div>
                      <div
                        className="text-[#222094] p-4 md:px-10 md:py-7 rounded-2xl bg-primary-white max-w-3xl font-medium text-sm md:text-lg lg:text-2xl">
                        {item.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
