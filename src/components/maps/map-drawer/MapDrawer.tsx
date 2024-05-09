import useIssue from '@/hooks/useIssue'
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
import { BsThreeDotsVertical } from 'react-icons/bs'
import DeleteModal from './DeleteModal'

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
  const { issue, isLoading, error } = useIssue(locationId)
  const modal = useDisclosure()

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
                      item='location'
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
