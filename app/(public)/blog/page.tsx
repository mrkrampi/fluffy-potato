import Image from 'next/image';
import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/json-ld';
import { Section } from '@/components/markup/section';
import { Heading } from '@/components/markup/heading';
import { getPublishedPosts } from '@/db/post-queries';
import { ArticlesContainer } from '@/app/(public)/blog/_components/articles-container';
import { BLOG_ARTICLES_MICRODATA, BLOG_WEBPAGE_MICRODATA } from '@/consts/microdata';

import blogImage1 from '@/public/blog/blog-image-1.svg';
import blogImage2 from '@/public/blog/blog-image-2.svg';

export const metadata: Metadata = {
  title: siteConfig.blogTitle,
  description: siteConfig.blogDescription,
};

const BlogPage = async () => {
  const articlesData = getPublishedPosts();

  const [
    articles
  ] = await Promise.all([
    articlesData
  ]);

  return (
    <>
      <Section className="relative">
        <div className="relative z-10 flex flex-col justify-center items-center">
          <Heading>
            Блог
          </Heading>

          <p className="text-primary-blue font-medium lg:text-2xl lg:mt-[72px]">
            [ Експертні статті та поради з IT, щоб розкрити ваш потенціал ]
          </p>
        </div>

        <Image
          src={blogImage1}
          alt="Blog image 1"
          className="absolute right-5 top-[200px]"
        />

        <Image
          src={blogImage2}
          alt="Blog image 2"
          className="absolute -left-3 top-20"
        />
      </Section>

      <ArticlesContainer articles={articles}/>

      <JsonLd data={BLOG_WEBPAGE_MICRODATA}/>
      <JsonLd data={BLOG_ARTICLES_MICRODATA}/>
    </>
  );
};

export default BlogPage;
