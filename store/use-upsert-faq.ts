import { create } from 'zustand';

import { IFaq } from '@/interfaces/model-types';

type UserUpsertFaq = {
  isOpen: boolean;
  faq: IFaq | undefined,
  open: (author?: IFaq) => void;
  close: () => void;
}

export const useUpsertFaq = create<UserUpsertFaq>((set) => ({
  isOpen: false,
  faq: undefined,
  open: (faq?: IFaq) => set({ faq, isOpen: true }),
  close: () => set({ faq: undefined, isOpen: false }),
}));
