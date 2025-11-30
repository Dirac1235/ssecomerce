import { create } from "zustand";

interface GlobalState {
  products: any[];
  categories: any[];
  users: any[];
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  setProducts: (products: any[]) => void;
  setCatagories: (categories: any[]) => void;
  setUsers: (users: any[]) => void;
}

export const useGlobalState = create<GlobalState>((set) => ({
  products: [],
  categories: [],
  users: [],
  searchQuery: "",
  
  setSearchQuery: (searchQuery: string) =>
    set((state) => ({
      ...state,
      searchQuery,
    })),
  setProducts: (products: any[]) =>
    set((state) => ({
      ...state,
      products,
    })),
  setCatagories: (categories: any[]) =>
    set((state) => ({
      ...state,
      categories,
    })),
  setUsers: (users: any[]) =>
    set((state) => ({
      ...state,
      users,
    })),
}));