import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.blogTitle,
  description: siteConfig.blogDescription,
};

const BlogPage = () => {
  return (
    <section className="text-primary-white">
      Courses page
    </section>
  )
};

export default BlogPage;
