import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'
import { SERVICE_URL } from '@/utils/constant'
import { ILocation } from '../types/location'

export default function useLocation(): {
  locations: ILocation[]
  isLoading: boolean
  isError: any
} {
  const { data, error, isLoading } = useSWR(`${SERVICE_URL}/locations`, fetcher)

  return {
    locations: data,
    isLoading,
    isError: error,
  }
}
