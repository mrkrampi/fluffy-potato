'use server';

import * as z from 'zod';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { studyFormats } from '@/db/schema';
import { UpsertStudyFormat } from '@/schemas';
import { getStudyFormatById } from '@/db/pricing-queries';

export const upsertStudyFormat = async (values: z.infer<typeof UpsertStudyFormat>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = UpsertStudyFormat.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const { id, name, price, items } = validatedFields.data;

  if (id) {
    const studyFormatFromDb = await getStudyFormatById(id);

    if (!studyFormatFromDb) {
      throw new Error('Такого формату навчання не існує');
    }

    await db.update(studyFormats).set({
      name,
      items,
      price: price.toString(),
    }).where(eq(studyFormats.id, id));

    revalidatePath('/admin/study-formats');
    revalidatePath('/');

    return {
      success: 'Формат навчання оновлено',
    };
  }

  await db.insert(studyFormats).values({
    name,
    items,
    price: price.toString(),
  });

  revalidatePath('/admin/study-formats');
  revalidatePath('/');

  return {
    success: 'Формат навчання створений',
  };
};
