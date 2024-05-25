'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';

import { RegisterSchema } from '@/schemas';
import { getUserByEmail } from '@/db/queries';
import db from '@/db/drizzle';
import { users } from '@/db/schema';
import { checkIfEmailAllowed } from '@/db/allowed-emails-quesries';

export const signUp = async (values: z.infer<typeof RegisterSchema>): Promise<{ success?: string; error?: string }> => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Invalid fields!',
    };
  }

  const { email, password, name } = validatedFields.data;

  const isAllowed = await checkIfEmailAllowed(email);

  if (!isAllowed) {
    return {
      error: 'Щось пішло не так',
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);


  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: 'Email вже використовується!',
    };
  }

  await db.insert(users).values({
    email,
    password: hashedPassword,
    emailVerified: new Date(),
    name,
  });

  return {
    success: 'Користувача створено!',
  };
};
