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
} from '@chakra-ui/react'
import { BiLike, BiChat, BiShare } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import CustomCard from '@/components/card/Card'
import { HSeparator } from '@/components/separator/Separator'

export default function ReviewCard(props: {
  image: string
  avatar: string | any
  name: string
  job: string
  text: string
  title: string
  [x: string]: any
}) {
  const { image, avatar, name, job, text, title, ...rest } = props
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const borderColor = useColorModeValue('white', '#111C44')

  return (
    <CustomCard mb={{ base: '0px', lg: '20px' }} maxW="md" {...rest}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Avatar
            src={avatar.src}
            border="4px solid"
            borderColor={borderColor}
          />
          <Flex flexDirection="column" ml="3">
            <Text color={textColorPrimary} fontWeight="bold" fontSize="sm">
              {name}
            </Text>
            <Text color={textColorSecondary} fontSize="sm">
              {job}
            </Text>
          </Flex>
        </Flex>
        <Popover>
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
                <Center cursor={'pointer'}>Edit</Center>
                <Center cursor={'pointer'} color={'red'}>
                  Delete
                </Center>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>

      <Text fontWeight={'bold'} fontSize={'lg'} mt="15px">
        {title}
      </Text>
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
