import { CourseInterface, CourseProgram } from '@/interfaces/course.interface';
import { Heading } from '@/components/markup/heading';;
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

interface CourseProgramSectionProps {
  course: CourseInterface;
}

export const CourseProgramSection = ({ course: { courseProgram } }: CourseProgramSectionProps) => {
  return (
    <section>
      <Heading className="lg:mx-5 md:mx-8 mx-2">
        Програма курсу
      </Heading>

      <p className="mt-8 lg:mt-24 font-medium tracking-tight text-primary-gray lg:text-2xl md:px-8 lg:px-12 mx-2">
        За 3 місяці ти отримаєш затребувану професію Junior QC/QA Engineer та зможеш працевлаштуватися в ІТ компанію з зарплатою і працювати
        з любої країни світу.
      </p>

      <div className="lg:mt-40">
        <Accordion type="multiple" className="w-full border-none">
          {courseProgram?.map((program: CourseProgram, index: number) =>
            (
              <AccordionItem key={program.id} value={program.title} className="border-b-2 border-primary-accent">
                <AccordionTrigger
                  hideChevron
                  className="hover:no-underline my-6 md:my-14 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-8 lg:gap-10 lg:mx-5 md:mx-8 mx-2"
                >
                  <span className="text-primary-accent font-medium lg:text-xl col-span-4 md:col-span-1 text-left">
                    [ {index + 1} Модуль ]
                  </span>
                  <span className="text-primary-white font-unbounded md:text-3xl lg:text-4xl col-span-2 md:col-span-3 lg:col-span-3 text-left">
                    {program.title}
                  </span>
                  <span className="text-primary-white font-medium lg:text-xl lg:col-span-2 text-left text-nowrap">
                    [ Результат ]
                  </span>
                  <span
                    className="hidden md:block relative min-w-6 min-h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 trigger transition-transform duration-200 ml-auto">
                      <Image src="/arrows/blue.svg" alt="Програма курсу" fill/>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="lg:mx-5 md:mx-8 mx-2">
                  <div className="grid md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-8 lg:gap-10 md:mb-8 lg:mb-12">
                    <div className="md:col-start-2 col-span-3 flex flex-col md:gap-8 lg:gap-12">
                      {program.lessons.map((item: string) =>
                        (
                          <div key={item} className="text-primary-white lg:text-2xl font-medium tracking-tighter">{item}</div>
                        ))}
                    </div>
                    <div className="lg:text-xl text-primary-white tracking-tighter col-span-2">
                      {program.objective}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
};
