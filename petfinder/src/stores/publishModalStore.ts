import { create } from 'zustand';

interface PublishModalStore {
 isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const usePublishModalStore = create<PublishModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
