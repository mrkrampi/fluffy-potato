'use server';

import * as z from 'zod';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { UpsertAuthor } from '@/schemas';
import { fakeAuthors } from '@/db/schema';
import { getAuthorById } from '@/db/author-queries';
import { eq } from 'drizzle-orm';

export const upsertAuthor = async (values: z.infer<typeof UpsertAuthor>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = UpsertAuthor.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const { id, name, position, image } = validatedFields.data;

  if (id) {
    const authorFromDB = await getAuthorById(id);

    if (!authorFromDB) {
      throw new Error('Такого автора не існує');
    }

    await db.update(fakeAuthors).set({
      name,
      position,
      imageUrl: image,
    }).where(eq(fakeAuthors.id, id));

    revalidatePath('/admin/blog');
    revalidatePath('/admin/settings/fake-authors');
    revalidatePath('/blog');
    revalidatePath('/blog/[articleSlug]', 'page');

    return {
      success: 'Автор оновлений',
    };
  }

  await db.insert(fakeAuthors).values({
    name,
    position,
    imageUrl: image,
  });

  revalidatePath('/admin/blog');
  revalidatePath('/admin/settings/fake-authors');

  return {
    success: 'Автор створений',
  };
};
