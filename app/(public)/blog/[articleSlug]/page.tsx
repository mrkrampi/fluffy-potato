import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { JsonLd } from '@/components/json-ld';
import { Section } from '@/components/markup/section';
import { ContactForm } from '@/components/contact-form';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';
import { getNeighborPosts, getPublishedPostBySlug } from '@/db/post-queries';
import { Article } from '@/app/(public)/blog/[articleSlug]/_components/article';
import { BlogHeader } from '@/app/(public)/blog/[articleSlug]/_components/blog-header';
import { PostsSwitcher } from '@/app/(public)/blog/[articleSlug]/_components/posts-switcher';
import { ArticleBreadcrumbs } from '@/app/(public)/blog/[articleSlug]/_components/article-breadcrumbs';

export const fetchCache = 'force-no-store';

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
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${articleSlug}`,
    },
  };
}

const ArticleSlugPage = async ({ params: { articleSlug } }: Readonly<Props>) => {
  const articleData = getPublishedPostBySlug(articleSlug);
  const neighborPostsData = getNeighborPosts(articleSlug);

  const [
    article,
    neighborPosts,
  ] = await Promise.all([
    articleData,
    neighborPostsData,
  ]);

  if (!article) {
    redirect('/blog');
  }

  return (
    <>
      <ScrollProgressBar
        className="md:top-[104px] top-20"
      />

      <BlogHeader/>

      <Section className="overflow-hidden">
        <div className="lg:max-w-[750px] lg:px-0 mx-auto">
          <ArticleBreadcrumbs articleTitle={article.title}/>

          <div className="mt-16">
            <Article article={article}/>
          </div>
        </div>

        <ContactForm/>

        <PostsSwitcher
          previousPost={neighborPosts.previousPost}
          nextPost={neighborPosts.nextPost}
        />
      </Section>

      {!!article.microdata && <JsonLd data={JSON.parse(article.microdata)}/>}
    </>
  );
};

export default ArticleSlugPage;
