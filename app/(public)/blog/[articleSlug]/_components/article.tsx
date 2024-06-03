'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { Loader } from 'lucide-react';

import { fakeAuthors, posts } from '@/db/schema';
import { Heading } from '@/components/markup/heading';
import { ArticleInfo } from '@/app/(public)/blog/[articleSlug]/_components/article-info';

type Props = {
  article: typeof posts.$inferSelect & { fakeAuthor: typeof fakeAuthors.$inferSelect | null };
}

export const Article = ({ article }: Readonly<Props>) => {
  const Editor = useMemo(
    () => dynamic(() => import('@/components/editor'),
      {
        ssr: false,
        loading: () => (
          <div className="text-primary-white">
            <div dangerouslySetInnerHTML={{ __html: article?.htmlContent ?? '' }}/>
          </div>
        ),
      }),
    []);

  return (
    <div>
      <Heading level={1} className="text-[32px] leading-[1.1] lg:text-[40px]">{article.title}</Heading>

      <div className="my-8">
        <ArticleInfo
          position={article.fakeAuthor?.position ?? ''}
          author={article.fakeAuthor?.name ?? ''}
          authorImgUrl={article.fakeAuthor?.imageUrl ?? ''}
          publishDate={article.publishDate}
          timeToRead={article.timeToRead}
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
