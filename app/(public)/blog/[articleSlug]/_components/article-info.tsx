import 'moment/locale/uk'
import moment from "moment";
import Image from 'next/image';
import { Dot } from 'lucide-react';
import { formatDate } from '@/lib/utils';

type Props = {
  publishDate: Date;
  timeToRead: string;
  authorImgUrl: string;
  author: string;
  position: string;
}

export const ArticleInfo = ({ author, authorImgUrl, position, timeToRead, publishDate }: Readonly<Props>) => {
  return (
    <div className="py-3 flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <div className="relative w-20 h-20">
          <Image
            src={authorImgUrl}
            alt={author}
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-primary-white text-xl font-medium">{author}</div>
          <div className="text-primary-accent">{position}</div>
        </div>
      </div>

      <div className="flex items-center text-primary-gray">
        <div>{timeToRead}</div>
        <Dot className="w-8 h-8"/>
        <div>{formatDate(publishDate)}</div>
      </div>
    </div>
  );
};
