'use server';

import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { eq } from 'drizzle-orm';
import { posts } from '@/db/schema';
import { getPostById } from '@/db/post-queries';

export const updatePublishStatus = async (id: string, isPublished: boolean) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const post = await getPostById(id);

  if (!post) {
    throw new Error('Такий пост не існує');
  }

  await db.update(posts)
    .set({
      isPublished,
    })
    .where(eq(posts.id, id));

  revalidatePath('/admin/blog');

  return {
    success: 'Статус змінено',
  };
};
