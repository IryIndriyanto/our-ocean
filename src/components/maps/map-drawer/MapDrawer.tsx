import useIssue from '@/hooks/useIssue'
import { Flex } from '@chakra-ui/react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import TabIssue from '@/components/tabs/tab'

const MapDrawer = ({ onClose, isOpen, locationId, locationName }: any) => {
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
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{locationName}</DrawerHeader>
          <DrawerBody>
            <Flex direction={'column'}>
              {error?.status === 404 ? <Box>No report yet</Box> : null}
              {isLoading ? <Box>Loading...</Box> : null}
              <Box fontSize={'24px'} fontStyle={'strong'} pb={'5px'}>
                {issue?.issue_title}
              </Box>
              <Box>{issue?.issue_status}</Box>
              <TabIssue />
            </Flex>
          </DrawerBody>
          <DrawerFooter>{/* Footer of the drawer */}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MapDrawer
