import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/json-ld';
import { getPublishedPosts } from '@/db/post-queries';
import { BLOG_ARTICLES_MICRODATA, BLOG_WEBPAGE_MICRODATA } from '@/consts/microdata';
import { ArticlesContainer } from '@/app/(public)/blog/_components/articles-container';
import { BlogHeaderSection } from '@/app/(public)/blog/_components/blog-header-section';

export const metadata: Metadata = {
  title: siteConfig.blogTitle,
  description: siteConfig.blogDescription,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  }
};

type Props = {
  searchParams: Record<string, any>;
}

const BlogPage = async ({ searchParams }: Readonly<Props>) => {
  const { page = 1 } = searchParams;
  const articlesData = getPublishedPosts();

  const [
    articles,
  ] = await Promise.all([
    articlesData,
  ]);

  return (
    <>
      <BlogHeaderSection/>

      <ArticlesContainer articles={articles} page={page}/>

      <JsonLd data={BLOG_WEBPAGE_MICRODATA}/>
      <JsonLd data={BLOG_ARTICLES_MICRODATA}/>
    </>
  );
};

export default BlogPage;
