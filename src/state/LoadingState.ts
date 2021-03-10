import create, { State } from "zustand";

interface ILoadingState extends State {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const LoadingState = create<ILoadingState>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export const { setLoading } = LoadingState.getState();
