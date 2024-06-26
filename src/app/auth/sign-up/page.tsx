'use client'

import React from 'react'
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { HSeparator } from '@/components/separator/Separator'
// Assets
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiEyeCloseLine } from 'react-icons/ri'
import { FaChevronLeft } from 'react-icons/fa'

export default function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white')
  const textColorSecondary = 'gray.400'
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600')
  const textColorBrand = useColorModeValue('brand.500', 'white')
  const brandStars = useColorModeValue('brand.500', 'brand.400')
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200')
  const googleText = useColorModeValue('navy.700', 'white')
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' },
  )
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' },
  )
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Flex
      maxW={{ base: '100%', md: 'max-content' }}
      w="100%"
      mx={{ base: 'auto', lg: 'half-screen' }}
      me="auto"
      h="100%"
      alignItems="start"
      justifyContent="center"
      mb={{ base: '30px', md: '60px' }}
      px={{ base: '25px', md: '0px' }}
      mt={{ base: '40px', md: '14vh' }}
      flexDirection="column"
    >
      <Link
        href="/main/map"
        style={{ width: 'fit-content', marginBottom: '20px' }}
      >
        <Flex align="center">
          <Icon
            as={FaChevronLeft}
            me="12px"
            h="13px"
            w="8px"
            color="secondaryGray.600"
          />
          <Text ms="0px" fontSize="sm" color="secondaryGray.600">
            Back to Map
          </Text>
        </Flex>
      </Link>
      <Box me="auto">
        <Heading color={textColor} fontSize="36px" mb="10px">
          Sign Up
        </Heading>
        <Text
          mb="36px"
          ms="4px"
          color={textColorSecondary}
          fontWeight="400"
          fontSize="md"
        >
          Enter your email and password to sign up!
        </Text>
      </Box>
      <Flex
        zIndex="2"
        direction="column"
        w={{ base: '100%', md: '420px' }}
        maxW="100%"
        background="transparent"
        borderRadius="15px"
        mx={{ base: 'auto', lg: 'unset' }}
        me="auto"
        mb={{ base: '20px', md: 'auto' }}
      >
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
            Name<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            id="username"
            variant="auth"
            fontSize="sm"
            ms={{ base: '0px', md: '0px' }}
            type="text"
            placeholder="your name"
            mb="24px"
            fontWeight="500"
            size="lg"
            autoComplete="name"
          />
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
            placeholder="mail@ourocean.com"
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
          <Link href="/auth/sign-in">
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
            >
              Sign Up
            </Button>
          </Link>
        </FormControl>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          maxW="100%"
          mt="0px"
        >
          <Link href="/auth/sign-in">
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Already have an account?
              <Text color={textColorBrand} as="span" ms="5px" fontWeight="500">
                Sign In
              </Text>
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
