// Chakra imports
import { Flex, useColorModeValue, Image } from '@chakra-ui/react'

// Custom components
import { HSeparator } from '@/components/separator/Separator'

export function SidebarBrand() {
  let logoColor = useColorModeValue('navy.800', 'white')

  return (
    <Flex alignItems="center" flexDirection="column">
      <Image src="/logo.png" alt="" p="10px 20px 10px 10px"></Image>

      <HSeparator m="20px" />
    </Flex>
  )
}

export default SidebarBrand
