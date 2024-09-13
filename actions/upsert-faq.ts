'use server';

import * as z from 'zod';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { faqs } from '@/db/schema';
import { UpsertFaq } from '@/schemas';
import { getFaqById } from '@/db/faq-queries';
import { ActionResult } from '@/interfaces/action-result';

export const upsertFaq = async (values: z.infer<typeof UpsertFaq>): Promise<ActionResult> => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = UpsertFaq.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const { id, question, answer, categoryId } = validatedFields.data;

  if (id) {
    const faqFromDb = await getFaqById(id);

    if (!faqFromDb) {
      throw new Error('Такого FAQ не існує');
    }

    await db.update(faqs).set({
      answer,
      question,
      categoryId,
    }).where(eq(faqs.id, id));

    revalidatePath('/admin/faq');
    revalidatePath('/');
    revalidatePath('/faq');

    return {
      success: 'FAQ оновлений',
    };
  }

  await db.insert(faqs).values({
    answer,
    question,
    categoryId,
  });

  revalidatePath('/admin/faq');
  revalidatePath('/');
  revalidatePath('/faq');

  return {
    success: 'FAQ створений',
  };
};
