'use client'

import Map from '@/components/maps/Map'
import { MapComponent } from '@/components/maps'
import {
  Box,
  Flex,
  FormLabel,
  Image,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Default() {
  // Chakra Color Mode

  return (
    <>
      <MapComponent />
    </>
  )
}
