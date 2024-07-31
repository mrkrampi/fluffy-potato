'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { faqCategory } from '@/db/schema';
import { getFaqCategoryById } from '@/db/faq-queries';
import { IFaqCategory } from '@/interfaces/model-types';
import { ActionResult } from '@/interfaces/action-result';

export const deleteFaqCategory = async (id: IFaqCategory['id']): Promise<ActionResult> => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const categoryFromDb = await getFaqCategoryById(id);

  if (!categoryFromDb) {
    throw new Error('Такий категорія не існує');
  }

  await db.delete(faqCategory).where(eq(faqCategory.id, id));

  revalidatePath('/admin/faq');
  revalidatePath('/admin/settings/faq-category');
  revalidatePath('/');
  revalidatePath('/faq');

  return {
    success: 'Видалення успішне',
  };
}
