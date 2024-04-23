import { PropsWithChildren } from 'react';

interface InfoCardProps {
  source: string;
}

export const InformationCard = ({ source, children }: PropsWithChildren<InfoCardProps>) => {
  return (
    <div className="max-w-[480px] w-full">
      <div className="flex items-center text-primary-white mb-3 md:mb-6 xl:mb-8 text-xl">
        {source}
        <div className="bg-primary-white ml-5 w-14 h-1 text-xl"/>
      </div>
      <div className="md:text-xl xl:text-4xl ml-auto max-w-[360px] w-full text-primary-white font-medium">
        {children}
      </div>
    </div>
  )
};
