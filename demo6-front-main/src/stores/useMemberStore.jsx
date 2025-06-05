import { create } from "zustand";

const useMemberStore = create((set) => ({
  isPasswordVerified: false,

  setPasswordVerified: () =>
    set((state) => ({ ...state, isPasswordVerified: true })),
}));

export default useMemberStore;
