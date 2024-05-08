'use client'
import { ACCESS_TOKEN, SERVICE_URL } from '@/utils/constant'
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  InputGroup,
  Flex,
  useColorModeValue,
  InputRightElement,
  Icon,
  Checkbox,
  Button,
  useToast,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalHeader,
  Box,
  Center,
} from '@chakra-ui/react'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiEyeCloseLine } from 'react-icons/ri'

export default function SignInForm() {
  const textColor = useColorModeValue('navy.700', 'white')
  const textColorSecondary = 'gray.400'
  const textColorBrand = useColorModeValue('brand.500', 'white')
  const brandStars = useColorModeValue('brand.500', 'brand.400')

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isFormLoading, setIsFormLoading] = useState(false)

  const handleClick = () => setShow(!show)
  const toast = useToast()
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onOpen()
    try {
      const response = await fetch(`${SERVICE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const authToken = data.access_token
        if (typeof window !== 'undefined') {
          localStorage.setItem(ACCESS_TOKEN, authToken)
        }
        //close modal
        onClose()
        router.replace('/main/map')

        toast({
          title: 'Login Success',
          description: 'Welcome to Oceanesia.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } else {
        onClose()
        toast({
          title: 'Login Failed',
          description: 'There was an error submitting the form.',
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
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel
            htmlFor="username"
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Username<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            id="username"
            variant="auth"
            fontSize="sm"
            ms={{ base: '0px', md: '0px' }}
            placeholder="username"
            mb="24px"
            fontWeight="500"
            size="lg"
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="off"
          />
          <FormLabel
            htmlFor="password"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            display="flex"
          >
            Password<Text color={brandStars}>*</Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              id="password"
              fontSize="sm"
              placeholder="Min. 8 characters"
              mb="24px"
              size="lg"
              type={show ? 'text' : 'password'}
              variant="auth"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement display="flex" alignItems="center" mt="4px">
              <Icon
                color={textColorSecondary}
                _hover={{ cursor: 'pointer' }}
                as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          <Flex justifyContent="space-between" align="center" mb="24px">
            <FormControl display="flex" alignItems="center">
              <Checkbox
                id="remember-login"
                colorScheme="brandScheme"
                me="10px"
              />
              <FormLabel
                htmlFor="remember-login"
                mb="0"
                fontWeight="normal"
                color={textColor}
                fontSize="sm"
              >
                Keep me logged in
              </FormLabel>
            </FormControl>
            <Link href="/auth/forgot-password">
              <Text
                color={textColorBrand}
                fontSize="sm"
                w="124px"
                fontWeight="500"
              >
                Forgot password?
              </Text>
            </Link>
          </Flex>
          <Button
            type="submit"
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
          >
            Sign In
          </Button>
        </FormControl>
      </form>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={'auto'}>
          <ModalBody>
            <Center px={6} py={4}>
              <Spinner mx={2} /> Log in to Oceanesia...
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
