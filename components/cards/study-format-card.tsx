import { StudyFormatInterface } from '@/interfaces/study-format.interface';
import { RegisterToCourseModal } from '@/components/modals/register-to-course-modal';
import { formatNumberWithSpaces } from '@/lib/utils';

interface StudyFormatCardProps {
  studyFormat: StudyFormatInterface;
  registerButton?: boolean;
}

export const StudyFormatCard = ({ studyFormat, registerButton }: StudyFormatCardProps) => {
  return (
    <div className="bg-gradient-to-b from-[#191923] to-[#5a5ad2] p-3 w-full items-center rounded-3xl text-center group cursor-pointer md:min-w-[348px] lg:min-w-[420px]">
      <div className="w-full h-full border border-[#272eb6] pt-7 py-10 px-4 lg:px-0 flex flex-col justify-between items-center rounded-3xl">
        <p className="text-primary-white text-[32px] xl:text-[40px] break-words font-unbounded">
          {studyFormat.name}
        </p>

        <div className="my-6 xl:my-8 w-1 h-8 xl:h-12 bg-primary-white relative before:absolute before:rotate-45 before:border-r-primary-white before:border-r-4 before:border-b-primary-white before:border-b-4 before:bottom-0 before:w-5 before:h-5 before:-right-2"/>

        <div>
          <ul className="list-none flex flex-col gap-y-5 xl:gap-y-6 text-primary-white xl:text-xl">
            {studyFormat.description.map((item: string) =>
              (
                <li key={item}>[ {item} ]</li>
              ))}
          </ul>
        </div>

        <div className="text-primary-white font-unbounded text-[32px] xl:text-4xl my-9 xl:opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out flex flex-col">
          {formatNumberWithSpaces(studyFormat.price)} ₴

          {registerButton && <RegisterToCourseModal studyFormat={studyFormat}/>}
        </div>
      </div>
    </div>
  );
};
