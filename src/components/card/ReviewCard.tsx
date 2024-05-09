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
} from '@chakra-ui/react'
import { BiLike, BiChat, BiShare } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import CustomCard from '@/components/card/Card'
import { HSeparator } from '@/components/separator/Separator'
import DeleteModal from '../maps/map-drawer/DeleteModal'
import { SERVICE_URL } from '@/utils/constant'
import { useState } from 'react'

export default function ReviewCard(props: {
  issueId: any
  image: string
  avatar: string | any
  name: string
  job: string
  text: string
  title: string
  [x: string]: any
}) {
  const { issueId, image, avatar, name, job, text, title, ...rest } = props
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const borderColor = useColorModeValue('white', '#111C44')
  const modal = useDisclosure()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)

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
              {name}
            </Text>
            <Text color={textColorSecondary} fontSize="xs">
              {job}
            </Text>
          </Flex>
        </Flex>
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
                item="issue"
                onDelete={handleDelete}
                isLoading={isLoading}
              />
              <VStack>
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
