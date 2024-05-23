'use server';

import { posts } from '@/db/schema';
import { auth } from '@/auth';
import { getPostById } from '@/db/post-queries';
import db from '@/db/drizzle';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export const updatePostData = async (id: string, post: Partial<typeof posts.$inferSelect>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const postFromDb = await getPostById(id);

  if (!postFromDb) {
    throw new Error('Такий пост не існує');
  }

  await db.update(posts)
    .set({ ...post })
    .where(eq(posts.id, id));

  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath(`/admin/blog/editor/${id}`);

  return {
    success: 'Пост оновлено',
  };
};
