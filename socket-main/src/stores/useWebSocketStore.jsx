import { create } from 'zustand';

const useWebSocketStore = create((set) => ({
  client: null,
  setClient: (newClient) => set({ client: newClient }),
}));

export default useWebSocketStore;