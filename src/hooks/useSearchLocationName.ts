import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'
import { SERVICE_URL } from '@/utils/constant'
import { ILocation } from '../types/location'

export default function useSearchLocationName(name: string): {
  locations: ILocation[]
  isLoading: boolean
  isError: any
} {
  const { data, error, isLoading } = useSWR(
    `${SERVICE_URL}/locations/search/name?name=${name}`,
    fetcher,
  )

  return {
    locations: data,
    isLoading,
    isError: error,
  }
}
