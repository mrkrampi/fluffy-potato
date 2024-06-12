import { create } from 'zustand';

import { fakeAuthors, feedbacks } from '@/db/schema';

type UseUpsertFeedback = {
  isOpen: boolean;
  feedback: typeof feedbacks.$inferSelect | undefined,
  open: (author?: typeof feedbacks.$inferSelect) => void;
  close: () => void;
}

export const useUpsertFeedback = create<UseUpsertFeedback>((set) => ({
  isOpen: false,
  feedback: undefined,
  open: (feedback?: typeof feedbacks.$inferSelect) => set({ feedback, isOpen: true }),
  close: () => set({ feedback: undefined, isOpen: false }),
}));
