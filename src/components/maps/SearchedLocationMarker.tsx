'use client'

import { useSearchedLocationStore } from '@/hooks/useSearchedLocationStore'
import { LatLngExpression } from 'leaflet'
import { useEffect, useState } from 'react'
import { useMapEvents } from 'react-leaflet'

export default function SearchedLocationMarker({ handleMarkerClick }: any) {
  const [position, setPosition] = useState<LatLngExpression | null>(null)
  const { SearchedLocation } = useSearchedLocationStore()
  const map = useMapEvents({})

  useEffect(() => {
    if (SearchedLocation) {
      setPosition([SearchedLocation.latitude, SearchedLocation.longitude])
      map.flyTo(
        [SearchedLocation.latitude, SearchedLocation.longitude],
        map.getZoom(),
      )
      handleMarkerClick(SearchedLocation)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SearchedLocation, map])

  return position === null ? null : <div />
}
