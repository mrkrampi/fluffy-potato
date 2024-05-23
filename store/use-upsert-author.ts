import { create } from 'zustand';

import { fakeAuthors } from '@/db/schema';

type UseCourseRegister = {
  isOpen: boolean;
  author: typeof fakeAuthors.$inferSelect | undefined,
  open: (author?: typeof fakeAuthors.$inferSelect) => void;
  close: () => void;
}

export const useUpsertAuthor = create<UseCourseRegister>((set) => ({
  isOpen: false,
  author: undefined,
  open: (author?: typeof fakeAuthors.$inferSelect) => set({ author, isOpen: true }),
  close: () => set({ author: undefined, isOpen: false }),
}));
