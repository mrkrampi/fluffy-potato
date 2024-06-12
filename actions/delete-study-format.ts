'use server';

import { auth } from '@/auth';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { studyFormats } from '@/db/schema';
import { getStudyFormatById } from '@/db/pricing-queries';

export const deleteStudyFormat = async (id: typeof studyFormats.$inferSelect['id']) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const studyFormatFromDb = await getStudyFormatById(id);

  if (!studyFormatFromDb) {
    throw new Error('Такий формат навчання не існує');
  }

  await db.delete(studyFormats).where(eq(studyFormats.id, id));

  revalidatePath('/admin/study-formats');
  revalidatePath('/');

  return {
    success: 'Видалення успішне',
  };
};
