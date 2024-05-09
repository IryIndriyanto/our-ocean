import {
  Center,
  DrawerOverlay,
  Flex,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useBreakpointValue,
} from '@chakra-ui/react'
import TabIssue from '@/components/tabs/tab'
import DeleteModal from './DeleteModal'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SERVICE_URL } from '@/utils/constant'

const MapDrawer = ({
  onClose,
  isOpen,
  locationId,
  locationName,
  locationDescription,
  setClickedMarker,
}: any) => {
  const placement: 'bottom' | 'right' | undefined = useBreakpointValue({
    base: 'bottom',
    md: 'right',
  })
  const size = useBreakpointValue({ base: 'full', md: 'sm' })
  const modal = useDisclosure()
  const toast = useToast()

  const handleDelete = async () => {
    try {
      const response = await fetch(`${SERVICE_URL}/locations/${locationId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        //close modal
        modal.onClose()

        toast({
          title: 'Location deleted',
          description: 'Location deleted successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } else {
        modal.onClose()
        toast({
          title: 'Failed',
          description: 'There was an error.',
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
      <Drawer
        trapFocus={false}
        size={size}
        onClose={onClose}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        variant="clickThrough"
        placement={placement ? placement : 'right'}
      >
        <DrawerOverlay />
        <DrawerContent maxH={{ base: '95svh', md: 'none' }} pt={6}>
          <DrawerCloseButton
            right={10}
            top={{ base: '20px', md: '5px' }}
            onClick={() => setClickedMarker({})}
          />
          <DrawerHeader px={'38px'}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize={'x-large'}> {locationName}</Text>
              <Popover offset={[-30, 0]}>
                <PopoverTrigger>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </PopoverTrigger>
                <PopoverContent w={20}>
                  <PopoverBody>
                    <DeleteModal
                      isOpen={modal.isOpen}
                      onClose={modal.onClose}
                      item="location"
                      onDelete={handleDelete}
                    ></DeleteModal>
                    <VStack fontSize="16px" fontWeight="400">
                      <Center _hover={{ fontWeight: '600' }} cursor={'pointer'}>
                        Edit
                      </Center>
                      <Center
                        _hover={{ fontWeight: '600' }}
                        cursor={'pointer'}
                        color={'red'}
                        onClick={modal.onOpen}
                      >
                        Delete
                      </Center>
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction={'column'}>
              <TabIssue
                locationId={locationId}
                locationName={locationName}
                locationDescription={locationDescription}
              />
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Box>&copy; Oceanesia 2024</Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MapDrawer
