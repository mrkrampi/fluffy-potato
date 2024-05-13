import { eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { users } from '@/db/schema';

export const getUserByEmail = async (email: string) => {
  return db.query.users.findFirst({
    where: eq(users.email, email),
  });
};

export const getUserById = async (id: string) => {
  return db.query.users.findFirst({
    where: eq(users.id, id),
  });
};
