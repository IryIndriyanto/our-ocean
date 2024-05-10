import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Select,
  useToast,
  Text,
} from '@chakra-ui/react'
import { SERVICE_URL } from '@/utils/constant'
import { useState } from 'react'

const EditIssueModal = ({
  isOpen,
  onClose,
  issueId,
}: {
  isOpen: boolean
  onClose: () => void
  issueId: number
}) => {
  const [status, setStatus] = useState<string>('')
  const toast = useToast()
  const handleSubmit = async () => {
    try {
      const response = await fetch(`${SERVICE_URL}/issues/${issueId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          issue_status: status,
        }),
      })

      if (response.ok) {
        toast({
          title: 'Issue updated successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        onClose()
      } else {
        toast({
          title: 'Failed to update issue',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    } catch (error) {
      console.error('Error updating issue:', error)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={'auto'}>
        <ModalHeader >Edit Issue</ModalHeader>
        <ModalBody>
          <Text mb={'10px'} fontSize="lg">Select a new status for the issue:</Text>
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="CLOSED">Closed</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button mr="2" colorScheme="brand" onClick={handleSubmit}>
            Update
          </Button>
          <Button ml="2" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditIssueModal
