import { posts } from '@/db/schema';
import Link from 'next/link';

type Props = {
  nextPost?: typeof posts.$inferSelect;
  previousPost?: typeof posts.$inferSelect;
}

export const PostsSwitcher = ({ nextPost, previousPost }: Readonly<Props>) => {
  return (
    <div className="flex justify-between">
      <Link
        href={`/blog/${previousPost?.slug}`}
        className="max-w-[150px] md:max-w-[340px] relative"
      >
        <div
          className="h-1 w-3/4 max-w-[120px] mb-4 bg-primary-white relative before:absolute before:w-4 before:h-4 before:left-0 md:before:left-0 before:border-b-4 before:border-l-4 before:border-primary-white before:rotate-45 before:top-0.5 before:-translate-y-1/2"/>

        <div className="font-medium md:text-2xl text-primary-white">
          {previousPost?.title}
        </div>
      </Link>

      <Link
        href={`/blog/${nextPost?.slug}`}
        className="max-w-[150px] md:max-w-[340px] relative"
      >
        <div
          className="h-1 w-3/4 max-w-[120px] mb-4 ml-auto bg-primary-white relative before:absolute before:w-4 before:h-4 before:right-0 md:before:right-0 before:border-t-4 before:border-r-4 before:border-primary-white before:rotate-45 before:top-0.5 before:-translate-y-1/2"/>

        <div className="font-medium md:text-2xl text-primary-white">
          {nextPost?.title}
        </div>
      </Link>
    </div>
  );
};
