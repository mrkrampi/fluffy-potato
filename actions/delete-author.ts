'use server';

import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { eq } from 'drizzle-orm';
import { fakeAuthors, posts } from '@/db/schema';
import { getAuthorById } from '@/db/author-queries';

export const deleteAuthor = async (id: string) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const author = await getAuthorById(id);

  if (!author) {
    throw new Error('Такий Автор не існує');
  }

  await db.delete(fakeAuthors).where(eq(fakeAuthors.id, id));

  revalidatePath('/admin/blog');
  revalidatePath('/admin/fake-authors');

  return {
    success: 'Видалення успішне',
  };
};
