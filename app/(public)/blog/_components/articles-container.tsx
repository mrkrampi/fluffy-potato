import { posts } from '@/db/schema';
import { Section } from '@/components/markup/section';
import { ArticleCard } from '@/app/(public)/blog/_components/article-card';

type Props = {
  articles: Array<typeof posts.$inferSelect>;
}

export const ArticlesContainer = ({ articles }: Readonly<Props>) => {
  return (
    <Section className="grid lg:grid-cols-[repeat(auto-fill,470px)] gap-9 justify-center">
      {
        articles.map((article) => ((
          <ArticleCard key={article.id} article={article}/>
        )))
      }
    </Section>
  );
};
