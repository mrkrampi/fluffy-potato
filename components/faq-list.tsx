import Image from 'next/image';

import { IFaq } from '@/interfaces/model-types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Props = {
  items: Array<IFaq>;
}

export const FaqList = ({ items }: Readonly<Props>) => {
  return (
    <Accordion type="multiple" className="w-full border-none">
      {items.map((item: IFaq) =>
        (
          <AccordionItem key={item.id} value={`item-${item.id}`} className="my-7">
            <AccordionTrigger hideChevron className="hover:no-underline">
              <span className="flex items-center gap-x-2 lg:gap-x-6 w-full">
                <span className="lg:h-24 lg:min-w-24 md:h-20 md:min-w-20 h-12 min-w-12 relative">
                  <Image src="/faq/question.webp" alt="Faq Question" fill className="object-cover rounded-full"/>
                </span>

                <span
                  className="bg-secondary-black p-4 md:px-10 md:py-7 rounded-[30px] font-medium text-sm md:text-base lg:text-2xl text-primary-white text-left">
                  {item.question}
                </span>

                <span className="relative min-w-6 md:ml-auto min-h-6 md:w-12 md:h-12 trigger transition-transform duration-200">
                  <Image src="/arrows/white.svg" alt="Faq Question Trigger" fill/>
                </span>
              </span>
            </AccordionTrigger>

            <AccordionContent>
              <div className="flex flex-row-reverse items-center gap-x-2 lg:gap-x-6 my-3">
                <div className="lg:h-24 lg:min-w-24 md:h-20 md:min-w-20 h-12 min-w-12 relative">
                  <Image src="/natalia.webp" alt="Faq Question" fill className="object-cover rounded-full"/>
                </div>

                <p
                  className="text-[#222094] p-4 md:px-10 md:py-7 rounded-[30px] bg-primary-white max-w-3xl font-medium text-sm md:text-base lg:text-2xl">
                  {item.answer}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};
