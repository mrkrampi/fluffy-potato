import 'moment/locale/uk'
import moment from "moment";
import Link from 'next/link';
import Image from 'next/image';

import { posts } from '@/db/schema';

type Props = {
  article: typeof posts.$inferSelect;
}

export const ArticleCard = ({ article }: Readonly<Props>) => {
  const creationDate = moment(article.creationDate);
  creationDate.locale('uk');

  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="relative w-full lg:max-w-[470px] lg:h-[270px]">
        <Image
          src={article.coverImageUrl ?? ''}
          alt={article.title}
          fill
          className="object-cover object-center aspect-video rounded-md"
        />
      </div>

      <div className="flex justify-between text-primary-gray lg:my-8">
        <p>4 minutes read</p>
        <p>{creationDate.format('D MMMM YYYY')}</p>
      </div>

      <p className="text-primary-white font-medium lg:text-3xl mb-2">
        {article.title}
      </p>

      <p className="text-primary-white">
        {article.metadata}
      </p>
    </Link>
  )
};
