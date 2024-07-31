'use server';

import z from 'zod';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { faqCategory } from '@/db/schema';
import { UpsertFaqCategory } from '@/schemas';
import { getFaqCategoryById } from '@/db/faq-queries';
import { ActionResult } from '@/interfaces/action-result';

export const upsertFaqCategory = async (values: z.infer<typeof UpsertFaqCategory>): Promise<ActionResult> => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = UpsertFaqCategory.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const { id, name } = validatedFields.data;

  if (id) {
    const faqCategoryFromDb = await getFaqCategoryById(id);

    if (!faqCategoryFromDb) {
      throw new Error('Такої категорії не існує');
    }

    await db.update(faqCategory)
      .set({ name })
      .where(eq(faqCategory.id, id));

    revalidatePath('/admin/faq');
    revalidatePath('/admin/settings/faq-category');
    revalidatePath('/');
    revalidatePath('/faq');

    return {
      success: 'Категорія оновлена'
    }
  }

  await db.insert(faqCategory).values({ name });

  revalidatePath('/admin/faq');
  revalidatePath('/admin/settings/faq-category');
  revalidatePath('/');
  revalidatePath('/faq');

  return {
    success: 'Категорія створена'
  }
}
