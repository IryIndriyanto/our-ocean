import { SERVICE_URL } from '@/utils/constant'
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
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
        <FormControl my="8px">
          <FormLabel mb="4px">Latitude</FormLabel>
          <Input type="text" disabled value={latitudeSelected} />
          <FormLabel>Longitude</FormLabel>
          <Input type="text" disabled value={longitudeSelected} />
          <FormLabel>Location Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter location name"
            onChange={(e) => setLocationName(e.target.value)}
          />
          <FormLabel>Location Description</FormLabel>
          <Textarea
            placeholder="Enter location description"
            onChange={(e) => setLocationDescription(e.target.value)}
          />
        </FormControl>
        {/* Add more form controls for other fields */}
        <Button  type="submit" variant="brand" w="100%" mt={4}>
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
