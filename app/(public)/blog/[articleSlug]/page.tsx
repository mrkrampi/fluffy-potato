import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { Section } from '@/components/markup/section';
import { ContactForm } from '@/components/contact-form';
import { getPublishedPostBySlug } from '@/db/post-queries';
import { Article } from '@/app/(public)/blog/[articleSlug]/_components/article';
import { ArticleBreadcrumbs } from '@/app/(public)/blog/[articleSlug]/_components/article-breadcrumbs';

type Props = {
  params: {
    articleSlug: string;
  }
}

export async function generateMetadata({ params: { articleSlug } }: Readonly<Props>): Promise<Metadata> {
  const articleData = getPublishedPostBySlug(articleSlug);

  const [
    article,
  ] = await Promise.all([
    articleData,
  ]);

  return {
    title: `${article?.title} | NIKO IT ACADEMY`,
    description: article?.metadata,
  };
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
    <Section className="lg:max-w-[750px] lg:px-0 mx-auto">
      <div>
        <ArticleBreadcrumbs articleTitle={article.title}/>

        <div className="mt-16">
          <Article article={article}/>
        </div>
      </div>

      <ContactForm isBlogMode/>
    </Section>
  );
};

export default ArticleSlugPage;
