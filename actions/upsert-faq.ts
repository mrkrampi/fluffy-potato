'use server';

import * as z from 'zod';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { faqs } from '@/db/schema';
import { UpsertFaq } from '@/schemas';
import { getFaqById } from '@/db/faq-queries';

export const upsertFaq = async (values: z.infer<typeof UpsertFaq>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = UpsertFaq.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const { id, question, answer } = validatedFields.data;

  if (id) {
    const faqFromDb = await getFaqById(id);

    if (!faqFromDb) {
      throw new Error('Такого FAQ не існує');
    }

    await db.update(faqs).set({
      answer,
      question,
    }).where(eq(faqs.id, id));

    revalidatePath('/admin/feedbacks');
    revalidatePath('/');

    return {
      success: 'FAQ оновлений',
    };
  }

  await db.insert(faqs).values({
    answer,
    question,
  });

  revalidatePath('/admin/feedbacks');
  revalidatePath('/');

  return {
    success: 'FAQ створений',
  };
};
