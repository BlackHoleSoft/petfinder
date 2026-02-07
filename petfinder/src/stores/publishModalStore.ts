import { create } from "zustand";

interface PublishModalStore {
  isOpen: boolean;
  toggleModal: (v: boolean) => void;
}

export const usePublishModalStore = create<PublishModalStore>((set) => ({
  isOpen: false,
  toggleModal: (v) => set(() => ({ isOpen: v })),
}));
