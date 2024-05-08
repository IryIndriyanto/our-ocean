import { useSearchedLocationStore } from '@/hooks/useSearchedLocationStore'
import { ILocation } from '@/types/location'
import { icon, LatLngExpression } from 'leaflet'
import { useEffect, useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'

export default function SearchedLocationMarker({ handleMarkerClick }: any) {
  const ICON_CLICKED = icon({
    iconUrl: '/assets/marker.png',
    iconSize: [35, 35],
  })
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
