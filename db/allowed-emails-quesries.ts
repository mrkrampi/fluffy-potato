import { cache } from 'react';
import { eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { allowedEmails } from '@/db/schema';

export const getAllowedEmails = cache(() => {
  return db.query.allowedEmails.findMany();
});

export const checkIfEmailAllowed = async (email: string) => {
  const record = await db.query.allowedEmails.findFirst({
    where: eq(allowedEmails.email, email),
  });

  return !!record;
};
