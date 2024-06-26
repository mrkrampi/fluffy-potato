import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/markup/section';
import { MINI_COURSES_LIST } from '@/consts/mini-courses';
import { MiniCourseInterface } from '@/interfaces/mini-course.interface';
import { Heading } from '@/components/markup/heading';

export const MiniCourseSection = () => {
  return (
    <Section>
      <div>
        <div className="mt-[-260px] md:mt-[-450px] lg:mt-[-420px] xl:mt-[-500px]">
          <div className="md:w-[75%] xl:max-w-[60vw] xl:w-full md:bg-primary-black rounded-tr-3xl xl:pt-[78px] md:p-5 xl:pr-16 md:-ml-8 md:pl-8 xl:-ml-28 xl:pl-24">
            <h4
              className="xl:w-full text-primary-white text-2xl md:text-5xl mb-8 md:mb-5 xl:mb-16 px-4 md:px-0 w-3/4 bg-primary-black pt-2 rounded-tr-3xl font-unbounded">
              Не впевнені що вам підійде IT професія?
            </h4>

            <p className="text-primary-white px-4 md:px-0 lg:text-xl">
              Курс “Знайомство з професією Тестувальник ПЗ” від Niko IT Academy — це ваш шанс познайомитися з IT-інфраструктурою і відчути
              себе в ролі тестувальника
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="xl:mt-40 flex md:flex-col-reverse xl:flex-row justify-between max-w-[1800px] w-full mx-auto">
            <div className="xl:max-w-[50%] w-full">
              <div className="md:hidden xl:max-w-[50%] w-full relative min-h-[350px] md:min-h-[700px] xl:min-h-full">
                <Image
                  src="/courses/mini-course.webp"
                  alt="Mini course"
                  fill
                  className="object-contain object-center"
                />
              </div>

              <Heading className="lg:whitespace-nowrap">
                Міні-курс
              </Heading>

              <div className="flex xl:flex-col md:justify-between md:items-center xl:items-start flex-col md:flex-row">
                <div className="flex flex-col gap-y-6 xl:gap-y-8 text-primary-white font-medium md:text-xl my-10 md:mt-16 md:mb-0 xl:my-28 font-medium">
                  {MINI_COURSES_LIST.map((miniCourse: MiniCourseInterface, index: number) => {
                    return (
                      <div
                        key={miniCourse.id}
                        className="grid grid-cols-[1fr_6fr_1fr] md:grid-cols-[40px_250px_48px] xl:grid-cols-[48px_250px_48px] md:gap-x-5 xl:gap-x-7"
                      >
                        <div>[ {index + 1} ]</div>
                        <div>{miniCourse.name}</div>
                        <div className="relative w-8 h-6 md:w-12 md:h-9 my-auto md:my-0">
                          <Image
                            src="/arrows/blue.svg"
                            alt="Mini Course"
                            fill
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Button
                  asChild
                  size="5xl"
                  variant="outline"
                  className="bg-transparent text-primary-white text-xl xl:text-3xl font-bold h-[74px] py-3 px-16 md:py-6 md:px-16 w-fit md:w-auto mx-auto md:mx-0 xl:h-20 rounded-full xl:px-14 xl:py-12"
                >
                  <Link href="/courses/mini-course">До міні - курсу</Link>
                </Button>
              </div>
            </div>

            <div className="hidden md:block xl:max-w-[50%] w-full relative min-h-[350px] md:min-h-[700px] xl:min-h-full">
              <Image
                src="/courses/mini-course.webp"
                alt="Mini course"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
