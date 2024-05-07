import useIssue from '@/hooks/useIssue'
import { DrawerOverlay, Flex } from '@chakra-ui/react'
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
          <DrawerCloseButton right={10} top={{ base: '20px', md: '5px' }} onClick={() => setClickedMarker({})} />
          <DrawerHeader px={'38px'} fontSize={'x-large'}>{locationName}</DrawerHeader>
          <DrawerBody>
            <Flex direction={'column'}>
              <TabIssue locationId={locationId} locationName={locationName} locationDescription={locationDescription}/>
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
