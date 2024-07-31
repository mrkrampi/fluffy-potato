'use server';

import { auth } from '@/auth';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { faqs } from '@/db/schema';
import { getFaqById } from '@/db/faq-queries';
import { ActionResult } from '@/interfaces/action-result';
import { IFaq } from '@/interfaces/model-types';

export const deleteFaq = async (id: IFaq['id']): Promise<ActionResult> => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const faqFromDb = await getFaqById(id);

  if (!faqFromDb) {
    throw new Error('Такий FAQ не існує');
  }

  await db.delete(faqs).where(eq(faqs.id, id));

  revalidatePath('/admin/faq');
  revalidatePath('/');
  revalidatePath('/faq');

  return {
    success: 'Видалення успішне',
  };
};
