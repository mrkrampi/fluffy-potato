'use server';

import * as z from 'zod';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { allowedEmails } from '@/db/schema';
import { CreateAllowedEmail } from '@/schemas';
import { checkIfEmailAllowed } from '@/db/allowed-emails-quesries';

export const addAllowedEmail = async (values: z.infer<typeof CreateAllowedEmail>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = CreateAllowedEmail.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const { email } = validatedFields.data;

  const isEmailExist = await checkIfEmailAllowed(email);

  if (isEmailExist) {
    return {
      error: 'Такий email вже доданий',
    };
  }

  await db.insert(allowedEmails).values({ email });

  revalidatePath('/admin/settings/allowed-emails');

  return {
    success: 'Email додано',
  };
};
