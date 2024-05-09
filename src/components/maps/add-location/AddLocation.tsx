import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Center,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Marker, useMapEvents } from 'react-leaflet'
import AddLocationForm from './AddLocationForm'
import { icon } from 'leaflet'

export default function AddLocation() {
  const [selectLocation, setSelectLocation] = useState(false)
  const [latitudeSelected, setLatitudeSelected] = useState(0)
  const [longitudeSelected, setLongitudeSelected] = useState(0)

  return (
    <>
      <Popover offset={[100, 10]} closeOnBlur={false}>
        <PopoverTrigger>
          <Button
            w={160}
            bottom={10}
            left={{ base: '10px', xl: '280px' }}
            position={'fixed'}
            colorScheme={!selectLocation ? 'blue' : 'red'}
            ml="4"
            p={6}
            onClick={() => setSelectLocation(!selectLocation)}
          >
            {selectLocation ? 'Cancel' : 'Add Location'}
          </Button>
        </PopoverTrigger>
        <PopoverContent w={360} p={4} borderRadius={20}>
          <PopoverHeader fontWeight={700} fontSize={'large'}>
            <Center pb="4px">Add New Location</Center>
          </PopoverHeader>
          <PopoverBody>
            <AddLocationForm
              latitudeSelected={latitudeSelected}
              longitudeSelected={longitudeSelected}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {selectLocation && (
        <ClickComponent
          setLatitudeSelected={setLatitudeSelected}
          setLongitudeSelected={setLongitudeSelected}
          latitudeSelected={latitudeSelected}
          longitudeSelected={longitudeSelected}
        />
      )}
    </>
  )
}

function ClickComponent({
  setLatitudeSelected,
  setLongitudeSelected,
  latitudeSelected,
  longitudeSelected,
}: any) {
  const ICON = icon({
    iconUrl: '/assets/add-location.png',
    iconSize: [40, 40],
  })

  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng
      setLatitudeSelected(lat)
      setLongitudeSelected(lng)
      console.log('Clicked location:', lat, lng)
      
    },
  })
  return <Marker icon={ICON} position={[latitudeSelected, longitudeSelected]} />
}
