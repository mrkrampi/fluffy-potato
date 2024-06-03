import 'moment/locale/uk'
import moment from "moment";
import Link from 'next/link';
import Image from 'next/image';

import { posts } from '@/db/schema';
import { formatDate } from '@/lib/utils';

type Props = {
  article: typeof posts.$inferSelect;
}

export const ArticleCard = ({ article }: Readonly<Props>) => {
  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="relative w-full h-[200px] lg:max-w-[470px] lg:h-[270px]">
        <Image
          src={article.coverImageUrl ?? ''}
          alt={article.title}
          fill
          className="object-cover object-center aspect-video rounded-xl"
        />
      </div>

      <div className="flex justify-between text-primary-gray my-8">
        <p>{article.timeToRead}</p>
        <p>{formatDate(article.publishDate)}</p>
      </div>

      <p className="text-primary-white font-medium text-2xl lg:text-3xl mb-4 lg:mb-2">
        {article.title}
      </p>

      <p className="text-primary-white">
        {article.metadata}
      </p>
    </Link>
  )
};
