import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from '@chakra-ui/react'
const DeleteModal = ({ isOpen, onClose, onDelete, item, isLoading }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m="auto">
        <ModalHeader>{`Delete ${item}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{`Are you sure you want to delete ${item}?`}</ModalBody>
        <ModalFooter>
          <Button w='80px' colorScheme="red" mr={3} onClick={onDelete}>
            {isLoading ? <Spinner/> : 'Delete'}
          </Button>
          <Button  variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default DeleteModal
