import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/json-ld';
import { BLOG_ARTICLES_MICRODATA, BLOG_WEBPAGE_MICRODATA } from '@/consts/microdata';

export const metadata: Metadata = {
  title: siteConfig.blogTitle,
  description: siteConfig.blogDescription,
};

const BlogPage = () => {
  return (
    <>
      <section className="text-primary-white">
        Courses page
      </section>

      <JsonLd data={BLOG_WEBPAGE_MICRODATA}/>
      <JsonLd data={BLOG_ARTICLES_MICRODATA}/>
    </>
  )
};

export default BlogPage;
