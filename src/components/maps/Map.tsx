import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  ZoomControl,
  Tooltip,
} from 'react-leaflet'
import { icon } from 'leaflet'
import useLocation from '@/hooks/useLocation'
import MapDrawer from './map-drawer/MapDrawer'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { ILocation } from '../../types/location'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useState, useRef } from 'react'

export default function Map() {
  const ICON = icon({
    iconUrl: '/location.png',
    iconSize: [30, 30],
  })
  const ICON_CLICKED = icon({
    iconUrl: '/marker.png',
    iconSize: [35, 35],
  })

  const { locations } = useLocation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [locationId, setLocationId] = useState(2)
  const [locationName, setLocationName] = useState('Beach Name')
  const [latitude, setLatitude] = useState(-6.1754)
  const [longitude, setLongitude] = useState(106.827)
  const [clickedMarkers, setClickedMarker] = useState<{
    [key: string]: boolean
  }>({})

  const getLocation = (location: ILocation) => {
    setLocationId(location.id)
    setLocationName(location.name)
    setLatitude(location.latitude)
    setLongitude(location.longitude)
  }

  const handleMarkerClick = (location: ILocation) => {
    onClose()
    setClickedMarker({})
    setClickedMarker((prevClickedMarkers) => ({
      ...prevClickedMarkers,
      [location.id]: true,
    }))
    getLocation(location)
    setTimeout(() => {
      onOpen()
    }, 300)
  }

  return (
    <>
      <MapContainer
        style={{ height: '100vh', zIndex: '0' }}
        center={[-6.1754, 106.827]}
        zoom={9}
        zoomControl={false}
      >
        <ClickComponent />
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations?.map((location: ILocation) => (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            icon={clickedMarkers[location.id] ? ICON_CLICKED : ICON}
            eventHandlers={{
              click: () => {
                handleMarkerClick(location)
              },
            }}
          >
            <Tooltip >{location.name}</Tooltip>
          </Marker>
        ))}
      </MapContainer>
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Open drawer"
        onClick={onOpen}
        position="fixed"
        top={40}
        right={10}
      />
      <MapDrawer
        onClose={onClose}
        isOpen={isOpen}
        locationId={locationId}
        locationName={locationName}
        latitude={latitude}
        longitude={longitude}
        setClickedMarker={setClickedMarker}
      />
    </>
  )
}

function ClickComponent() {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng
      console.log('Clicked location:', lat, lng)
      map.locate()
    },
    locationfound: (location) => {
      console.log('location found:', location)
      // map.setView(location.latlng, 12)
    },
  })
  return null
}
