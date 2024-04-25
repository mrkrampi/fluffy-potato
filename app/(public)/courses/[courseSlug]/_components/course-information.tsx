export const CourseInformation = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-x-6 gap-y-8 mx-2 md:mx-0">
      <div className="w-full bg-secondary-black lg:py-14 lg:px-32 py-4 px-8 md:p-10 flex justify-between rounded-3xl col-span-2">
        <div className="flex flex-col justify-center">
          <div className="text-primary-white font-unbounded md:text-3xl lg:text-4xl lg:mb-4">
            Тривалість
          </div>
          <div className="lg:text-xl font-medium text-right text-primary-blue">
            3 місяці
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-primary-white font-unbounded md:text-3xl lg:text-4xl lg:mb-4">
            Формат
          </div>
          <div className="lg:text-xl font-medium text-right text-primary-blue">
            Онлайн
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-accent py-4 px-8 lg:py-14 lg:px-32 md:p-10 flex justify-between rounded-3xl">
        <div>
          <div className="text-primary-white font-unbounded md:text-3xl lg:text-4xl lg:mb-4">
            Старт курсу
          </div>
          <div className="md:text-xl lg:text-2xl font-medium text-right text-primary-white">
            19 квітня
          </div>
        </div>
      </div>
    </div>
  )
}
