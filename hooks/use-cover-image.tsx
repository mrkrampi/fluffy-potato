import { create } from 'zustand';

type CoverImageStore = {
  url?: string;
  postId?: string;
  isOpen: boolean;
  onOpen: (postId: string) => void;
  onClose: () => void;
  onReplace: (postId: string, url: string) => void;
}

export const useCoverImage = create<CoverImageStore>((set) => ({
  isOpen: false,
  postId: undefined,
  onOpen: (postId) => set({ isOpen: true, url: undefined, postId }),
  onClose: () => set({ isOpen: false, url: undefined }),
  onReplace: (postId: string, url: string) => set({ isOpen: true, url, postId }),
}));
