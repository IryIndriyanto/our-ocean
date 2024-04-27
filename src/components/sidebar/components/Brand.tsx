// Chakra imports
import { Flex, useColorModeValue} from '@chakra-ui/react';

// Custom components
import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
	
	let logoColor = useColorModeValue('navy.800', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Flex
			color={logoColor}
			h='26px'
			w='175px'
			justifyContent='center'
			borderRadius='10px'
			fontWeight='bold'
			fontSize='28px'
			>
				Oceanisia
			</Flex>
			<HSeparator m='20px' />
		</Flex>
	);
}

export default SidebarBrand;