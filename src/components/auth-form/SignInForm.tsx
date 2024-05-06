'use client'
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
} from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiEyeCloseLine } from 'react-icons/ri'

export default function SignInForm() {
  const textColor = useColorModeValue('navy.700', 'white')
  const textColorSecondary = 'gray.400'
  const textColorBrand = useColorModeValue('brand.500', 'white')
  const brandStars = useColorModeValue('brand.500', 'brand.400')

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl>
      <FormLabel
        htmlFor="email"
        display="flex"
        ms="4px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        mb="8px"
      >
        Email<Text color={brandStars}>*</Text>
      </FormLabel>
      <Input
        isRequired={true}
        id="email"
        variant="auth"
        fontSize="sm"
        ms={{ base: '0px', md: '0px' }}
        type="email"
        placeholder="mail@oceanesia.com"
        mb="24px"
        fontWeight="500"
        size="lg"
        autoComplete="email"
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
          <Checkbox id="remember-login" colorScheme="brandScheme" me="10px" />
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
          <Text color={textColorBrand} fontSize="sm" w="124px" fontWeight="500">
            Forgot password?
          </Text>
        </Link>
      </Flex>
      <Button
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
  )
}
