import Image from 'next/image';

import { FAQ_QUESTIONS_LIST } from '@/consts/faq-questions';
import { FAQQuestion } from '@/interfaces/faq-question.interface';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FaqSection = () => {
  return (
    <section
      className="w-full h-full my-48 pt-36">
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="w-full flex justify-between items-center gap-x-9">
          <h1 className="max-w-5xl uppercase text-primary-white lg:text-7xl xl:text-[6.5rem] leading-none font-medium tracking-tighter min-w-[35%]">
            Ваші питання
          </h1>
          <div
            className="h-1.5 w-full bg-primary-white relative before:absolute before:border-primary-white before:border-t-[6px] before:border-r-[6px] before:w-12 before:h-12 before:right-1 before:rotate-45 before:-top-5 before:rounded"/>
          <h1 className="max-w-5xl uppercase text-primary-white lg:text-7xl xl:text-[6.5rem] leading-none font-medium tracking-tighter min-w-[35%]">
            Наші відповіді
          </h1>
        </div>
        <div className="w-full my-40">
          <Accordion type="multiple" className="w-full border-none">
            {FAQ_QUESTIONS_LIST.map((item: FAQQuestion) => {
              return (
                <AccordionItem key={item.id} value={`item-${item.id}`} className="my-2">
                  <AccordionTrigger hideChevron className="hover:no-underline">
                    <div className="flex items-center gap-x-6">
                      <div className="w-28 h-28 relative">
                        <Image src="faq-question.svg" alt="Faq Question" fill/>
                      </div>
                      <div className="bg-[#191821] px-10 py-7 rounded-2xl font-medium text-2xl text-primary-white text-left">
                        {item.question}
                      </div>
                      <div className="relative w-12 h-12 trigger transition-transform duration-200">
                        <Image src="white-arrow.svg" alt="Faq Question Trigger" fill/>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-row-reverse items-center gap-x-6 my-12">
                      <div className="w-28 h-28 relative">
                        <Image src="faq-response.svg" alt="Faq Question" fill/>
                      </div>
                      <div className="text-[#222094] px-10 py-7 rounded-2xl bg-primary-white max-w-3xl font-medium text-2xl">
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
