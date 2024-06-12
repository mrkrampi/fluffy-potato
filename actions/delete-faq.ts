'use server';

import { auth } from '@/auth';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { faqs } from '@/db/schema';
import { getFaqById } from '@/db/faq-queries';

export const deleteFaq = async (id: typeof faqs.$inferSelect['id']) => {
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

  return {
    success: 'Видалення успішне',
  };
};
