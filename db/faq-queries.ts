import { cache } from 'react';
import { eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { faqs } from '@/db/schema';

export const getFaqs = cache(() => db.query.faqs.findMany({
  orderBy: (faqs, { asc }) => [asc(faqs.creationDate)],
}));

export const getFaqById = cache((id: typeof faqs.$inferSelect['id']) => db.query.faqs.findFirst({
  where: eq(faqs.id, id),
}));
