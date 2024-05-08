import { ILocation } from '@/types/location'
import { create } from 'zustand'

type LocationState = {
  SearchedLocation: ILocation | null
  setSearchedLocation: (location: ILocation | null) => void
}

export const useSearchedLocationStore = create<LocationState>((set) => ({
  SearchedLocation: null,
  setSearchedLocation: (location) => set({ SearchedLocation: location }),
}))
