import Image from 'next/image';

import { Heading } from '@/components/markup/heading';
import { Section } from '@/components/markup/section';
import { CourseInterface, CourseProgram } from '@/interfaces/course.interface';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BlurredParagraph } from '@/components/markup/blurred-paragraph';

interface CourseProgramSectionProps {
  course: CourseInterface;
}

export const CourseProgramSection = ({ course: { courseProgram } }: CourseProgramSectionProps) => {
  return (
    <Section className="md:max-w-full lg:px-0">
      <Heading className="lg:mx-5 md:mx-8 mx-2">
        Програма курсу
      </Heading>

      <BlurredParagraph className="mt-8 lg:mt-24 lg:w-3/4 font-medium tracking-tight text-primary-gray lg:text-2xl md:px-8 lg:px-6">
        За 3 місяці ти отримаєш затребувану професію Junior QC/QA Engineer та зможеш працевлаштуватися в ІТ компанію з зарплатою і працювати
        з любої країни світу.
      </BlurredParagraph>

      <div className="mt-20 lg:mt-40">
        <Accordion type="multiple" className="w-full border-none">
          {courseProgram?.map((program: CourseProgram, index: number) =>
            (
              <AccordionItem key={program.id} value={program.title} className="border-b-2 border-primary-accent">
                <AccordionTrigger
                  hideChevron
                  className="hover:no-underline my-6 md:my-14 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-8 lg:gap-10 lg:mx-5 md:mx-8 mx-2"
                >
                  <span className="text-primary-accent font-medium lg:text-xl col-span-2 md:col-span-1 text-left mb-8">
                    [&nbsp;&nbsp;{index + 1} Модуль&nbsp;&nbsp;]
                  </span>
                  <span
                    className="text-primary-white font-unbounded text-2xl md:text-3xl lg:text-[40px] col-span-2 md:col-span-3 lg:col-span-3 text-left uppercase">
                    {program.title}
                  </span>
                  <span className="flex md:hidden flex-col gap-5 text-left ml-5 col-span-2">
                    {program.lessons.map((item: string) =>
                      (
                        <span key={item} className="text-primary-white font-medium tracking-tighter">{item}</span>
                      ))}
                  </span>
                  <span className="text-primary-white font-medium lg:text-xl lg:col-span-2 text-left text-nowrap mt-8 md:mt-0">
                    [ Результат ]
                  </span>
                  <span
                    className="relative min-w-6 min-h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 trigger transition-transform duration-200 ml-auto mt-auto md:mt-0">
                      <Image src="/arrows/blue.svg" alt="Програма курсу" fill/>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="lg:mx-5 md:mx-8 mx-2">
                  <div className="grid md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-8 lg:gap-10 md:mb-8 lg:mb-12">
                    <div className="hidden md:flex md:col-start-2 col-span-3 flex-col md:gap-8 lg:gap-12">
                      {program.lessons.map((item: string) =>
                        (
                          <div key={item} className="text-primary-white lg:text-2xl font-medium tracking-tighter">{item}</div>
                        ))}
                    </div>
                    <div className="text-base lg:text-xl text-primary-white tracking-tighter col-span-2 ml-5 md:ml-0">
                      {program.objective}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </Section>
  );
};
