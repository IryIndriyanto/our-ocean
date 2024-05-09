import { useState } from 'react'

const useDeleteLocation = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const handleDeleteLocation = async (locationId: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/locations/${locationId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        // Location deleted successfully
        console.log('Location deleted')
      } else {
        // Error deleting location
        console.error('Error deleting location')
      }
    } catch (error) {
      console.error('Error deleting location', error)
      setError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleDeleteLocation, isLoading, error }
}

export default useDeleteLocation
