import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'

export default function useLocation() {
  const { data, error, isLoading } = useSWR(
    `https://oceanesia-be.onrender.com/locations/`,
    fetcher,
  )

  return {
    locations: data,
    isLoading,
    isError: error,
  }
}
