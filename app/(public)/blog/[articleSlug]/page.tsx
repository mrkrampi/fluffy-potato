import { redirect } from 'next/navigation';

import { getPublishedPostBySlug } from '@/db/post-queries';
import { Article } from '@/app/(public)/blog/[articleSlug]/_components/article';

type Props = {
  params: {
    articleSlug: string;
  }
}

const ArticleSlugPage = async ({ params: { articleSlug } }: Readonly<Props>) => {
  const articleData = getPublishedPostBySlug(articleSlug);

  const [
    article,
  ] = await Promise.all([
    articleData,
  ]);

  if (!article) {
    redirect('/blog');
  }

  return (
    <div>
      <Article article={article}/>
    </div>
  );
};

export default ArticleSlugPage;
