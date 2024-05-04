'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Chakra imports
import {
  Box,
  Button,
  Select,
  Textarea,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'
// Assets
import Link from 'next/link'
import useIssue from '@/hooks/useIssue'
import { ILocation } from '../../types/location'

export default function ReportForm({ latitude, longitude }: any) {
  const [issueCategory, setIssueCategory] = useState('OTHER')
  const [issueStatus, setIssueStatus] = useState('OPEN')
  const [description, setDescription] = useState('')
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white')
  const textColorSecondary = 'gray.400'
  const brandStars = useColorModeValue('brand.500', 'brand.400')
  const [show, setShow] = useState(false)

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (!file) {
      // Handle the case when no file is selected
      return
    }
    const filename = `${uuidv4()}-${file.name}`
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch(
        `https://atbipbhagnbuqiuntcbb.supabase.co/storage/v1/object/oceanesia-photo/${filename}`,
        {
          method: 'POST',
          body: formData,
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0YmlwYmhhZ25idXFpdW50Y2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNTk3NDQsImV4cCI6MjAyODkzNTc0NH0.YTB_X5qbWg_6N95qzGIMJ02hupe4-761PgqbmE_f8p0',
          },
        },
      )
      const data = await response.json()
      const imageId = encodeURIComponent(data.Key.replace('oceanesia-photo/',''))
      const fileUrl = `https://atbipbhagnbuqiuntcbb.supabase.co/storage/v1/object/public/oceanesia-photo/${imageId}`
      console.log(fileUrl)
      // Do something with the file URL, such as displaying it or saving it to a database
    } catch (error) {
      // Handle any errors that occur during the upload process
      console.log(error)
    }
  }

  return (
    <Flex
      zIndex="2"
      direction="column"
      w={{ base: '100%', md: '420px' }}
      maxW="100%"
      background="transparent"
      borderRadius="15px"
      mx={{ base: 'auto', lg: 'unset' }}
      me="auto"
      mb={{ base: '20px', md: 'auto' }}
    >
      <FormControl>
        <FormLabel
          htmlFor="latitude"
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="4px"
        >
          Location Latitude <Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          id="latitude"
          variant="auth"
          fontSize="sm"
          ms={{ base: '0px', md: '0px' }}
          type="search"
          value={latitude}
          mb="12px"
          fontWeight="500"
          size="lg"
          disabled={true}
        />
        <FormLabel
          htmlFor="longitude"
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="4px"
        >
          Location Longitude <Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          id="longitude"
          variant="auth"
          fontSize="sm"
          ms={{ base: '0px', md: '0px' }}
          type="search"
          value={longitude}
          mb="12px"
          fontWeight="500"
          size="lg"
          disabled={true}
        />

        <FormLabel
          htmlFor="issue-type"
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="4px"
        >
          Issue Type<Text color={brandStars}>*</Text>
        </FormLabel>
        <Select
          id="issue-type"
          variant="main"
          fontSize="sm"
          ms={{ base: '0px', md: '0px' }}
          defaultValue="Trash"
          mb="12px"
          fontWeight="500"
          size="lg"
        >
          <option value="TRASH">Trash</option>
          <option value="POLLUTION">Pollution</option>
          <option value="EROSION">Erosion</option>
          <option value="UNSAFE">Unsafe</option>
          <option value="OTHER">Other</option>
        </Select>
        <FormLabel
          htmlFor="description"
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="4px"
        >
          Description<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          as={Textarea}
          isRequired={true}
          id="description"
          variant="auth"
          fontSize="sm"
          ms={{ base: '0px', md: '0px' }}
          type="text"
          placeholder="describe the issue"
          mb="12px"
          fontWeight="500"
          size="lg"
        />
        <FormLabel
          htmlFor="photo"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          display="flex"
        >
          Upload Photo<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          id="photo"
          fontSize="sm"
          ms={{ base: '0px', md: '0px' }}
          mb="12px"
          size="lg"
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          fontWeight="500"
          variant="auth"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            '&::-webkit-file-upload-button': {
              all: 'unset',
              cursor: 'pointer',
              border: 'none',
              padding: '10px 10px',
              backgroundColor: 'transparent',
              borderRadius: '5px',
            },
            '&::-webkit-file-upload-button:hover': {
              backgroundColor: 'none',
            },
          }}
        />

        <Button
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          w="100%"
          h="50"
          mb="12px"
        >
          Submit Report
        </Button>
      </FormControl>
    </Flex>
  )
}
