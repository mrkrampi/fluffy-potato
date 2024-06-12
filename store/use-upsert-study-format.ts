import { create } from 'zustand';

import { studyFormats } from '@/db/schema';

type UseUpsertStudyFormat = {
  isOpen: boolean;
  studyFormat: typeof studyFormats.$inferSelect | undefined,
  open: (studyFormat?: typeof studyFormats.$inferSelect) => void;
  close: () => void;
}

export const useUpsertStudyFormat = create<UseUpsertStudyFormat>((set) => ({
  isOpen: false,
  studyFormat: undefined,
  open: (studyFormat?: typeof studyFormats.$inferSelect) => set({ studyFormat, isOpen: true }),
  close: () => set({ studyFormat: undefined, isOpen: false }),
}));
