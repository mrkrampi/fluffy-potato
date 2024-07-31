import { cache } from 'react';
import { eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { faqCategory, faqs } from '@/db/schema';
import { IFaq } from '@/interfaces/model-types';

export const getFaqs = cache(() => db.query.faqs.findMany({
  orderBy: (faqs, { asc }) => [asc(faqs.creationDate)],
  with: {
    category: true,
  }
}));

export const getFaqById = cache((id: typeof faqs.$inferSelect['id']) => db.query.faqs.findFirst({
  where: eq(faqs.id, id),
}));

export const getFaqCategories = cache(() => db.query.faqCategory.findMany());

export const getFaqCategoryById = cache((categoryId: string) => db.query.faqCategory.findFirst({
  where: eq(faqCategory.id, categoryId),
}));

export const getFaqsByCategory = cache((categoryId: string) => db.query.faqCategory.findMany({
  where: eq(faqs.categoryId, categoryId),
}));
