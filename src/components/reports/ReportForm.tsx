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
import { ANON_KEY, SERVICE_URL } from '@/utils/constant'

export default function ReportForm({ locationId, locationName, onClose }: any) {
  const [issueTitle, setIssueTitle] = useState('')
  const [issueCategory, setIssueCategory] = useState('OTHER')
  const [issueDescription, setIssueDescription] = useState('')

  const [file, setFile] = useState<File | undefined>()
  // const [photoURL, setPhotoURL] = useState('')
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white')
  const brandStars = useColorModeValue('brand.500', 'brand.400')

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFile(file)
    } else {
      return
    }
  }

  const handleFileUpload = async (file: File | undefined) => {
    if (!file) {
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
              `Bearer ${ANON_KEY}`,
          },
        },
      )
      const data = await response.json()
      const imageId = encodeURIComponent(
        data.Key.replace('oceanesia-photo/', ''),
      )
      return `https://atbipbhagnbuqiuntcbb.supabase.co/storage/v1/object/public/oceanesia-photo/${imageId}`
    } catch (error) {
      console.log(error)
      throw new Error(`An error occurred while uploading photo`)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const photoURL = await handleFileUpload(file)

    try {
      const response = await fetch(`${SERVICE_URL}/issues/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 1,
          location_id: locationId,
          issue_title: issueTitle,
          issue_image: photoURL,
          issue_category: issueCategory,
          issue_status: 'OPEN',
          issue_description: issueDescription,
        }),
      })

      if (response.ok) {
        console.log('Form submitted successfully')
        onClose()
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
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
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel
            htmlFor="locationName"
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="4px"
          >
            Location Name <Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            id="locationName"
            variant="auth"
            fontSize="sm"
            ms={{ base: '0px', md: '0px' }}
            value={locationName}
            mb="12px"
            fontWeight="500"
            size="lg"
            disabled={true}
          />

          <FormLabel
            htmlFor="issueTitle"
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="4px"
          >
            Issue Title <Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            id="issueTitle"
            variant="auth"
            fontSize="sm"
            ms={{ base: '0px', md: '0px' }}
            mb="12px"
            fontWeight="500"
            size="lg"
            onChange={(e) => setIssueTitle(e.target.value)}
          />

          <FormLabel
            htmlFor="issue-category"
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="4px"
          >
            Issue Category<Text color={brandStars}>*</Text>
          </FormLabel>
          <Select
            id="issue-category"
            onChange={(e) => setIssueCategory(e.target.value)}
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
            onChange={(e) => setIssueDescription(e.target.value)}
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
            onChange={handleFileSelect}
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
            type="submit"
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
      </form>
    </Flex>
  )
}
