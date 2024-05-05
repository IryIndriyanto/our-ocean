import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Icon,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'
import { HSeparator } from '../separator/Separator'
import { MdReport } from 'react-icons/md'
import ReportForm from '@/components/reports/ReportForm'

export default function ReportFormModal({ locationId, locationName }: any) {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <Flex h="100%" alignItems="center" justifyContent="center">
      <Button
        fontSize="sm"
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        <MdReport size={24} />
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="md">
        {overlay}
        <ModalContent>
          <ModalHeader fontSize={'large'}>Report a Beach Issue!</ModalHeader>
          <ModalCloseButton />
          <HSeparator />
          <ModalBody
            _hover={{
              background: 'none',
              cursor: 'pointer',
            }}
            paddingY={6}
          >
            <ReportForm locationId={locationId} onClose={onClose} locationName={locationName} />
          </ModalBody>
          <HSeparator />
        </ModalContent>
      </Modal>
    </Flex>
  )
}
