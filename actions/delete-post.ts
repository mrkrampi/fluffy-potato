'use server';

import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { eq } from 'drizzle-orm';
import { posts } from '@/db/schema';
import { getPostById } from '@/db/post-queries';

export const deletePost = async (id: string) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const post = await getPostById(id);

  if (!post) {
    throw new Error('Такий пост не існує');
  }

  await db.delete(posts).where(eq(posts.id, id));

  revalidatePath('/admin/blog');

  return {
    success: 'Видалення успішне',
  };
};
