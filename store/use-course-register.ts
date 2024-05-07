import { StudyFormatInterface } from '@/interfaces/study-format.interface';
import { create } from 'zustand';

type UseCourseRegister = {
  isOpen: boolean;
  studyFormat: StudyFormatInterface | undefined;
  open: (studyFormat: StudyFormatInterface) => void;
  close: () => void;
}

export const useCourseRegister = create<UseCourseRegister>((set) => ({
  isOpen: true,
  studyFormat: undefined,
  open: (studyFormat: StudyFormatInterface) => set({ studyFormat, isOpen: true }),
  close: () => set({ studyFormat: undefined, isOpen: false }),
}));
