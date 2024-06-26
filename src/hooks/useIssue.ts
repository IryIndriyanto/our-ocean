import { SERVICE_URL } from '@/utils/constant'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const resp = await fetch(url, {
    method: 'GET',
  })

  if (!resp.ok) {
    const error: any = new Error(
      'An error occurred while fetching issue detail.',
    )
    // Attach extra info to the error object.
    error.info = await resp.json()
    error.status = resp.status
    throw error
  }

  return await resp.json()
}

export default function useIssue(id: number) {
  const { data, error, isLoading } = useSWR(
    `${SERVICE_URL}/issues/location/${id}`,
    fetcher,
    { refreshInterval: 2000 },
  )

  return {
    issue: data,
    isLoading,
    error,
  }
}
