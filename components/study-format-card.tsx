import { StudyFormatInterface } from '@/interfaces/study-format.interface';
import { Button } from '@/components/ui/button';

interface StudyFormatCardProps {
  studyFormat: StudyFormatInterface;
  registerButton?: boolean;
}

export const StudyFormatCard = ({ studyFormat, registerButton }: StudyFormatCardProps) => {
  return (
    <div className="bg-gradient-to-b from-[#191923] to-[#5a5ad2] p-3 w-full max-w-[412px] items-center rounded-3xl text-center group cursor-pointer md:min-w-[340px] xl:min-w-max">
      <div className="w-full h-full border border-[#272eb6] pt-12 py-10 md:pb-16md: px-4 flex flex-col justify-between items-center rounded-3xl">
        <p className="text-primary-white text-3xl xl:text-4xl">
          {studyFormat.name}
        </p>
        <div className="my-6 xl:my-8 w-1 h-8 xl:h-12 bg-primary-white relative before:absolute before:rotate-45 before:border-r-primary-white before:border-r-4 before:border-b-primary-white before:border-b-4 before:bottom-0 before:w-5 before:h-5 before:-right-2"/>
        <div>
          <ul className="list-none flex flex-col gap-y-5 xl:gap-y-6 text-primary-white xl:text-lg">
            {studyFormat.description.map((item: string) =>
              (
                <li key={item}>[ {item} ]</li>
              ))}
          </ul>
        </div>
        <div className="text-primary-white text-3xl xl:text-4xl my-9 xl:opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out flex flex-col">
          {studyFormat.price} ₴
          {registerButton && <Button
              size="lg"
              variant="cta"
              className="bg-primary-white mt-6 text-primary-accent rounded-3xl py-3 text-xl font-semibold md:w-52"
          >
              Записатись
          </Button>}
        </div>
      </div>
    </div>
  );
};
