// Chakra imports
import { Flex, useColorModeValue, Image } from '@chakra-ui/react'

// Custom components
import { HSeparator } from '@/components/separator/Separator'

export function SidebarBrand() {
  let logoColor = useColorModeValue('navy.800', 'white')

  return (
    <Flex alignItems="center" flexDirection="column">
      <Image src="/logo.png" alt="" p="10px 20px 10px 10px"></Image>
      {/* <Flex
			color={logoColor}
			h='26px'
			w='175px'
			mb='5px'
			justifyContent='center'
			borderRadius='10px'
			fontWeight='bold'
			fontSize='28px'
			>
				Oceanesia
			</Flex> */}
      <HSeparator m="20px" />
    </Flex>
  )
}

export default SidebarBrand
