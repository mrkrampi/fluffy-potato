'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Loader } from 'lucide-react';

import { posts } from '@/db/schema';
import { Heading } from '@/components/markup/heading';
import { ArticleInfo } from '@/app/(public)/blog/[articleSlug]/_components/article-info';

type Props = {
  article: typeof posts.$inferSelect;
}

export const Article = ({ article }: Readonly<Props>) => {
  const Editor = useMemo(
    () => dynamic(() => import('@/components/editor'),
      {
        ssr: false,
        loading: () => (
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader className="animate-spin w-12 h-12"/>
          </div>
        ),
      }),
    []);

  return (
    <div>
      <Heading className="lg:text-[40px]">{article.title}</Heading>

      <div className="my-8">
        <ArticleInfo
          position="Founder at Niko IT Academy"
          author="Наталія Яцишинець"
          authorImgUrl="/natalia.webp"
          creationDate={article.creationDate}
          timeToRead="4 minutes read"
        />
      </div>

      <Editor
        theme="dark"
        editable={false}
        initialContent={article.content || ''}
      />
    </div>
  );
};
