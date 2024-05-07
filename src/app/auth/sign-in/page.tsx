'use client'

import React from 'react'
// Chakra imports
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { HSeparator } from '@/components/separator/Separator'
// Assets
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

import { FaChevronLeft } from 'react-icons/fa'
import SignInForm from '@/components/auth-form/SignInForm'

export default function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white')
  const textColorSecondary = 'gray.400'
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600')
  const textColorBrand = useColorModeValue('brand.500', 'white')
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
      maxW={{ base: '100%', md: 'max-content', sm: 'fit-content' }}
      w="100%"
      mx={{ base: 'auto', lg: 'half-screen' }}
      me="auto"
      h="100%"
      alignItems="start"
      justifyContent="center"
      mb={{ base: '30px', md: '60px' }}
      px={{ base: '25px', md: '0px' }}
      mt={{ base: '40px', md: '6vh' }}
      flexDirection="column"
    >
      {/* "Back to Map" button */}
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
          Sign In
        </Heading>
        <Text
          mb="36px"
          ms="4px"
          color={textColorSecondary}
          fontWeight="400"
          fontSize="md"
        >
          Enter your email and password to sign in!
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
        <Button
          fontSize="sm"
          me="0px"
          mb="26px"
          py="15px"
          h="50px"
          borderRadius="16px"
          bgColor={googleBg}
          color={googleText}
          fontWeight="500"
          _hover={googleHover}
          _active={googleActive}
          _focus={googleActive}
        >
          <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
          Sign in with Google
        </Button>
        <Flex align="center" mb="25px">
          <HSeparator />
          <Text color="gray.400" mx="14px">
            or
          </Text>
          <HSeparator />
        </Flex>
        <SignInForm />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          maxW="100%"
          mt="0px"
        >
          <Link href="/auth/sign-up">
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Not registered yet?
              <Text color={textColorBrand} as="span" ms="5px" fontWeight="500">
                Create an Account
              </Text>
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
