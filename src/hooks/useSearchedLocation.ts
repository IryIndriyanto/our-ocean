import { create } from 'zustand'

type LocationState = {
  SearchedLocationLtLg: number[] | null
  setSearchedLocationLtLg: (LtLg: number[] | null) => void
}

export const useSearchedLocationStore = create<LocationState>((set) => ({
  SearchedLocationLtLg: null,
  setSearchedLocationLtLg: (LtLg) => set({ SearchedLocationLtLg: LtLg }),
}))
