import { SERVICE_URL } from '@/utils/constant'
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Highlight,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'

export default function AddLocationForm({
  latitudeSelected,
  longitudeSelected,
  buttonRef,
}: any) {
  const [locationName, setLocationName] = useState('')
  const [locationDescription, setLocationDescription] = useState('')

  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onOpen()
    try {
      const response = await fetch(`${SERVICE_URL}/locations/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: latitudeSelected,
          longitude: longitudeSelected,
          name: locationName,
          description: locationDescription,
        }),
      })

      if (response.ok) {
        console.log('Form submitted successfully')
        toast({
          title: 'Location Added',
          description: 'Your new has been submitted successfully.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        onClose()
        if (buttonRef.current) {
          buttonRef.current.click()
        }
      } else {
        onClose()
        toast({
          title: 'Form submission failed',
          description: 'There was an error submitting the form.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Center>
          <Highlight
            query="Select location on map to set coordinates"
            styles={{ px: '1', py: '1', bg: 'navy.500', color: 'white' }}
          >
            Select location on map to set coordinates
          </Highlight>
        </Center>

        <FormControl my="8px">
          <FormLabel fontSize={'14px'} mb="4px">
            Latitude
          </FormLabel>
          <Input
            fontSize={'14px'}
            h={'30px'}
            type="text"
            disabled
            value={latitudeSelected}
          />
          <FormLabel fontSize={'14px'}>Longitude</FormLabel>
          <Input
            fontSize={'14px'}
            h={'30px'}
            type="text"
            disabled
            value={longitudeSelected}
          />
          <FormLabel fontSize={'14px'}>Location Name</FormLabel>
          <Input
            fontSize={'14px'}
            h={'30px'}
            type="text"
            placeholder="Enter location name"
            onChange={(e) => setLocationName(e.target.value)}
          />
          <FormLabel fontSize={'14px'}>Location Description</FormLabel>
          <Textarea
            fontSize={'14px'}
            placeholder="Enter location description"
            onChange={(e) => setLocationDescription(e.target.value)}
          />
        </FormControl>
        {/* Add more form controls for other fields */}
        <Button type="submit" variant="brand" w="100%" mt={4}>
          Add New Location
        </Button>
      </form>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={'auto'}>
          <ModalBody>
            <Center px={6} py={4}>
              <Spinner mx={2} /> Adding New Location...
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
