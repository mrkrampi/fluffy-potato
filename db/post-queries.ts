import { cache } from 'react';
import { and, eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { posts } from '@/db/schema';

export const getAllPosts = cache(async () => {
  return db.query.posts.findMany({
    with: {
      author: true,
    },
  });
});

export const getPublishedPosts = cache(async () => {
  return db.query.posts.findMany({
    where: eq(posts.isPublished, true),
  });
});

export const getPostBySlug = cache(async (slug: string) => {
  return db.query.posts.findFirst({
    where: eq(posts.slug, slug)
  });
});

export const getPublishedPostBySlug = cache(async (slug: string) => {
  return db.query.posts.findFirst({
    where: and(
      eq(posts.isPublished, true),
      eq(posts.slug, slug),
    ),
    with: {
      fakeAuthor: true,
    }
  });
});

export const getPostById = cache(async (id: string) => {
  return db.query.posts.findFirst({
    where: eq(posts.id, id),
  });
});
