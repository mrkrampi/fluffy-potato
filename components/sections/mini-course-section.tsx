import Image from 'next/image';
import { MINI_COURSES_LIST } from '@/consts/mini-courses';
import { MiniCourseInterface } from '@/interfaces/mini-course.interface';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const MiniCourseSection = () => {
  return (
    <section className="w-full">
      <div className="mt-[-260px] md:mt-[-450px] lg:mt-[-420px] xl:mt-[-500px]">
        <div className="md:w-[75%] xl:max-w-[50vw] xl:w-full md:bg-primary-black rounded-tr-3xl xl:pt-16 md:p-5 xl:px-20">
          <h4 className="text-primary-white text-2xl md:text-5xl mb-8 md:mb-5 xl:mb-16 px-4 md:px-0 w-3/4 bg-primary-black pt-2 rounded-tr-3xl font-unbounded">
            Не впевнені що вам підійде IT професія?
          </h4>
          <p className="text-primary-white px-4 md:px-0 lg:text-xl">
            Курс “Знайомство з професією Тестувальник ПЗ” від Niko IT Academy — це ваш шанс познайомитися з IT-інфраструктурою і відчути
            себе в ролі тестувальника
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center px-4 md:px-0">
        <div
          className="xl:my-40 flex md:flex-col-reverse xl:flex-row justify-between md:mx-4 xl:mx-0 md:px-4 max-w-[1600px] w-full mx-auto">
          <div className="xl:max-w-[50%] w-full">
            <div className="md:hidden xl:max-w-[50%] w-full relative min-h-[350px] md:min-h-[700px] xl:min-h-full">
              <Image
                src="mini-course.png"
                alt="Mini course"
                fill
                className="object-contain object-center"
              />
            </div>
            <h2 className="uppercase text-primary-white text-4xl md:text-6xl xl:text-[6.5rem] text-center md:text-left font-unbounded">
              Міні-курс
            </h2>
            <div className="flex xl:flex-col md:justify-between md:items-center xl:items-start flex-col md:flex-row">
              <div className="flex flex-col gap-y-6 xl:gap-y-8 text-primary-white md:text-xl my-10 md:my-16 xl:my-28 font-medium">
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
                          src="blue-arrow.svg"
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
                className="bg-transparent text-primary-white md:text-xl xl:text-3xl font-bold md:h-[72px] py-3 px-16 md:py-6 md:px-16 w-fit md:w-auto mx-auto md:mx-0"
              >
                <Link href="courses">До міні - курсу</Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:block xl:max-w-[50%] w-full relative min-h-[350px] md:min-h-[700px] xl:min-h-full">
            <Image
              src="mini-course.png"
              alt="Mini course"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
