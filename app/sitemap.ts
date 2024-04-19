import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.nikoit-academy.com',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.nikoit-academy.com/about-us',
      lastModified: new Date(),
    },
    {
      url: 'https://www.nikoit-academy.com/courses',
      lastModified: new Date(),
    },
    {
      url: 'https://www.nikoit-academy.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.nikoit-academy.com/faq',
      lastModified: new Date(),
    },
    {
      url: 'https://www.nikoit-academy.com/feedback',
      lastModified: new Date(),
    },
    {
      url: 'https://www.nikoit-academy.com/mentoring',
      lastModified: new Date(),
    },
  ];
}
