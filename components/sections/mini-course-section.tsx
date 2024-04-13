import Image from 'next/image';
import { MINI_COURSES_LIST } from '@/consts/mini-courses';
import { MiniCourseInterface } from '@/interfaces/mini-course.interface';
import { Button } from '@/components/ui/button';

export const MiniCourseSection = () => {
  return (
    <section className="w-full">
      <div className="mt-[-288px]">
        <div className="max-w-[50vw] w-full bg-primary-black rounded-3xl pt-16 pb-8 px-20">
          <h1 className="text-primary-white text-5xl mb-16">
            Не впевнені що вам підійде IT професія?
          </h1>
          <p className="text-primary-white">
            Курс “Знайомство з професією Тестувальник ПЗ” від Niko IT Academy — це ваш шанс познайомитися з IT-інфраструктурою і відчути
            себе в ролі тестувальника
          </p>
        </div>
      </div>
      <div className="my-44 flex justify-between max-w-screen-2xl w-full mx-auto">
        <div className="md:max-w-[50%] w-full">
          <h1 className="uppercase text-primary-white text-8xl">
            Міні-курс
          </h1>
          <div className="flex flex-col gap-y-8 text-primary-white text-xl my-28">
            {MINI_COURSES_LIST.map((miniCourse: MiniCourseInterface, index: number) => {
              return (
                <div
                  key={miniCourse.id}
                  className="grid grid-cols-[48px_250px_48px] gap-x-7"
                >
                  <div>[ {index + 1} ]</div>
                  <div>{miniCourse.name}</div>
                  <div className="relative w-12 h-9">
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
            size="5xl"
            variant="outline"
            className="bg-transparent text-primary-white text-3xl font-bold"
          >
            До міні - курсу
          </Button>
        </div>

        <div className="md:max-w-[50%] w-full relative min-h-full">
          <Image
            src="mini-course.png"
            alt="Mini course"
            fill
          />
        </div>
      </div>
    </section>
  );
};
