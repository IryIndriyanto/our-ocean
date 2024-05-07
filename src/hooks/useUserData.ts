import { SERVICE_URL } from '@/utils/constant'
import useSWR from 'swr'

const authToken = localStorage.getItem('revou-w10-token') ?? ''

const fetcher = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    const error: any = new Error(
      'An error occurred while fetching user detail.',
    )
    // Attach extra info to the error object.
    error.info = await response.json()
    error.status = response.status
    throw error
  }
  return await response.json()
}

export default function useUserData() {
  const { data, error, isLoading } = useSWR(`${SERVICE_URL}/user/me`, fetcher)

  return {
    issue: data,
    isLoading,
    error,
  }
}
