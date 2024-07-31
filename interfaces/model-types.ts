import { faqCategory, faqs } from '@/db/schema';

export type IFaq = typeof faqs.$inferSelect & { category: IFaqCategory | null };

export type IFaqCategory = typeof faqCategory.$inferSelect;
