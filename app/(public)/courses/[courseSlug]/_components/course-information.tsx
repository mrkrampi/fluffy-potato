import { courses } from '@/db/schema';
import { cn, formatDate } from '@/lib/utils';

type Props = {
  course: typeof courses.$inferSelect;
}

export const CourseInformation = ({course}: Readonly<Props>) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-6 gap-y-6 mx-2 md:mx-0">
      <div className={cn(
        "w-full bg-secondary-black lg:py-14 lg:px-16 py-6 px-8 md:p-10 flex flex-col md:flex-row gap-y-6 lg:gap-x-20 justify-between rounded-3xl md:col-span-2 lg:col-span-4",
        !course.startDate && 'lg:col-span-6',
      )}>
        <div className="flex flex-col justify-center">
          <div className="text-primary-white font-unbounded text-2xl md:text-3xl lg:text-[40px] lg:mb-4 uppercase">
            Тривалість
          </div>
          <div className="lg:text-2xl font-medium text-right text-primary-blue mr-auto md:mr-0 mt-4">
            {course.duration}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-primary-white font-unbounded text-2xl md:text-3xl lg:text-[40px] lg:mb-4 uppercase ml-auto md:ml-0">
            Формат
          </div>
          <div className="lg:text-2xl font-medium text-right text-primary-blue mt-4">
            Онлайн
          </div>
        </div>
      </div>

      {
        course.startDate
          ? (
            <div
              className="w-full md:w-1/2 lg:w-full bg-primary-accent py-6 px-8 lg:py-14 lg:px-16 md:p-10 flex justify-between rounded-3xl lg:col-span-2 lg:text-right">
              <div>
                <div className="text-primary-white font-unbounded text-2xl md:text-3xl lg:text-[40px] lg:mb-4 uppercase">
                  Старт курсу
                </div>
                <div className="md:text-xl lg:text-2xl font-medium text-right text-primary-white">
                  {formatDate(course.startDate, 'D MMMM')}
                </div>
              </div>
            </div>
          )
          : null
      }
    </div>
  )
}
