'use server';

import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { posts } from '@/db/schema';
import { getPostBySlug } from '@/db/post-queries';
import * as z from 'zod';
import { CreatePostSchema } from '@/schemas';

export const createPost = async (values: z.infer<typeof CreatePostSchema>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = CreatePostSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const { title, slug } = validatedFields.data;

  const post = await getPostBySlug(slug);

  if (post) {
    throw new Error('Пост з таким слагом вже існує');
  }

  await db.insert(posts).values({
    title,
    slug,
    content: '',
    authorId: session?.user?.id ?? '',
    timeToRead: '',
  });

  revalidatePath('/admin/blog');

  return {
    success: 'Пост створено',
  };
};
