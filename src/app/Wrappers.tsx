'use client'
import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import theme from '../theme/theme'

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>{' '}
    </CacheProvider>
  )
}
