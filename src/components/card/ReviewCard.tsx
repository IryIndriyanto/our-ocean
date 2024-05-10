import {
  Box,
  Flex,
  Avatar,
  Text,
  useColorModeValue,
  IconButton,
  Image,
  Button,
  AspectRatio,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Center,
  useDisclosure,
  useToast,
  Tag,
} from '@chakra-ui/react'
import { BiLike, BiChat, BiShare } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import CustomCard from '@/components/card/Card'
import { HSeparator } from '@/components/separator/Separator'
import DeleteModal from '../maps/map-drawer/DeleteModal'
import { SERVICE_URL } from '@/utils/constant'
import { useState } from 'react'
import useUser from '@/hooks/useUser'
import EditIssueModal from './EditModal'

export default function ReviewCard(props: {
  issueId: any
  image: string
  avatar: string | any
  name: string
  job: string
  text: string
  title: string
  status: string
  [x: string]: any
}) {
  const { issueId, image, avatar, name, job, text, title, status, ...rest } =
    props
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const borderColor = useColorModeValue('white', '#111C44')
  const modal = useDisclosure()
  const editModal = useDisclosure()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const { user, isLogin } = useUser()

  const handleDelete = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(`${SERVICE_URL}/issues/${issueId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        //close modal
        modal.onClose()

        toast({
          title: 'Issue deleted',
          description: 'Issue deleted successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setIsLoading(false)
      } else {
        modal.onClose()
        toast({
          title: 'Failed',
          description: 'There was an error.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const getStatusTagProps = () => {
    let tagColor: string = ''
    let tagText: string = ''
    let tagColorScheme: string = ''

    switch (status) {
      case 'IssueStatus.OPEN':
        tagColor = 'white'
        tagText = 'Open'
        tagColorScheme = 'green'
        break
      case 'IssueStatus.IN_PROGRESS':
        tagColor = 'white'
        tagText = 'In Progress'
        tagColorScheme = 'yellow'
        break
      case 'IssueStatus.CLOSED':
        tagColor = 'white'
        tagText = 'Closed'
        tagColorScheme = 'red'
        break
      default:
        tagColor = 'white'
        tagText = 'Unknown'
        tagColorScheme = 'gray'
        break
    }

    return { tagColor, tagText, tagColorScheme }
  }

  const { tagColor, tagText, tagColorScheme } = getStatusTagProps()

  return (
    <CustomCard mb={{ base: '0px', lg: '20px' }} maxW="md" {...rest}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Avatar
            src={avatar.src}
            border="px solid"
            borderColor={borderColor}
          />
          <Flex flexDirection="column" ml="3">
            <Text fontWeight={'bold'} fontSize={'xl'}>
              {title}
            </Text>
            <Text color={textColorPrimary} fontSize="sm">
              {`${name}  •  `}
              <Tag
                as="span"
                color={tagColor}
                colorScheme={tagColorScheme}
                size={'sm'}
                variant="solid"
              >
                {tagText}
              </Tag>
            </Text>
            <Text color={textColorSecondary} fontSize="xs">
              {job}
            </Text>
          </Flex>
        </Flex>
        {isLogin && (
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
                <VStack>
                  <Center
                    _hover={{ fontWeight: '600' }}
                    cursor={'pointer'}
                    onClick={editModal.onOpen}
                  >
                    Edit Status
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
                <DeleteModal
                  isOpen={modal.isOpen}
                  onClose={modal.onClose}
                  item="issue"
                  onDelete={handleDelete}
                  isLoading={isLoading}
                />
                <EditIssueModal
                  isOpen={editModal.isOpen}
                  onClose={editModal.onClose}
                  issueId={issueId}
                />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Flex>

      <Text mt="10px">{text}</Text>

      <AspectRatio mt="10px" ratio={1}>
        <Image
          objectFit="cover"
          src={image || '/assets/placeholder-image.webp'}
          alt="Image of Beach"
        />
      </AspectRatio>

      <Flex justify="space-between" flexWrap="wrap" mt="10px">
        <Button flex="1" leftIcon={<BiLike />} borderRadius={'8px'}>
          Like
        </Button>
        <Button flex="1" leftIcon={<BiChat />} borderRadius={'8px'}>
          Comment
        </Button>
        <Button flex="1" leftIcon={<BiShare />} borderRadius={'8px'}>
          Share
        </Button>
      </Flex>
      <HSeparator mx={-4} my={6} w="auto" />
    </CustomCard>
  )
}
