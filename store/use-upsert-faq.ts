import { create } from 'zustand';

import { faqs } from '@/db/schema';

type UserUpsertFaq = {
  isOpen: boolean;
  faq: typeof faqs.$inferSelect | undefined,
  open: (author?: typeof faqs.$inferSelect) => void;
  close: () => void;
}

export const useUpsertFaq = create<UserUpsertFaq>((set) => ({
  isOpen: false,
  faq: undefined,
  open: (faq?: typeof faqs.$inferSelect) => set({ faq, isOpen: true }),
  close: () => set({ faq: undefined, isOpen: false }),
}));
