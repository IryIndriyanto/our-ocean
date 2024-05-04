import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'
import { SERVICE_URL } from '@/utils/constant'

export default function useLocation() {
  const { data, error, isLoading } = useSWR(
    `${SERVICE_URL}/locations`,
    fetcher,
  )

  return {
    locations: data,
    isLoading,
    isError: error,
  }
}
