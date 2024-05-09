import { SERVICE_URL } from '@/utils/constant'
import useSWR from 'swr'

type User = {
  user_id: number
  username: string
  email: string
}
const fetcher = async (url: string) => {
  let authToken = ''

  if (typeof window !== 'undefined') {
    authToken = localStorage.getItem('oceanesia-access-token') ?? ''
  }
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

export default function useUser(): {
  user: User
  isLoading: boolean
  error: any
  isLogin: boolean
} {
  const { data, error, isLoading } = useSWR(`${SERVICE_URL}/users/me`, fetcher)

  return {
    user: data,
    isLoading,
    error,
    isLogin: data !== null && !isLoading && !error,
  }
}
