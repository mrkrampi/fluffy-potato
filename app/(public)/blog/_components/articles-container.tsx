'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { posts } from '@/db/schema';
import { Section } from '@/components/markup/section';
import { ArticleCard } from '@/app/(public)/blog/_components/article-card';
import { Pagination } from '@/app/(public)/blog/_components/pagination';

type Props = {
  articles: Array<typeof posts.$inferSelect>;
  page: number;
}

const ARTICLES_PER_PAGE = 3

export const ArticlesContainer = ({ articles, page }: Readonly<Props>) => {

  return (
    <Section>
      <div className="grid lg:grid-cols-[repeat(auto-fill,470px)] gap-16 lg:gap-9 justify-center">
        {
          articles.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE).map((article) => ((
            <ArticleCard key={article.id} article={article}/>
          )))
        }
      </div>

      <div className="mt-16 lg:mt-24 flex justify-center">
        <Pagination countOfPages={Math.ceil(articles.length / ARTICLES_PER_PAGE)}/>
      </div>
    </Section>
  );
};
