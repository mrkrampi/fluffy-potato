import { create } from 'zustand';

import { faqs } from '@/db/schema';
import { IFaq, IFaqCategory } from '@/interfaces/model-types';

type UserUpsertFaqCategory = {
  isOpen: boolean;
  category: IFaqCategory | undefined,
  open: (author?: IFaqCategory) => void;
  close: () => void;
}

export const useUpsertFaqCategory = create<UserUpsertFaqCategory>((set) => ({
  isOpen: false,
  category: undefined,
  open: (category?: IFaqCategory) => set({ category, isOpen: true }),
  close: () => set({ category: undefined, isOpen: false }),
}));
