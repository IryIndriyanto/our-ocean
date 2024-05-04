// chakra imports
import { Icon, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { BiMessageAltDots} from "react-icons/bi"; 

export function ItemContent(props:{info:string}) {
  const textColor = useColorModeValue("navy.700", "white");
  return (
    <>
      <Flex
        justify='center'
        align='center'
        borderRadius='16px'
        minH={{ base: "30px", md: "40px" }}
        h={{ base: "30px", md: "40px" }}
        minW={{ base: "30px", md: "40px" }}
        w={{ base: "30px", md: "40px" }}
        me='14px'>
        <Icon as={BiMessageAltDots} color='navy.500' w={8} h={14} />
      </Flex>
      <Flex flexDirection='column'>
        <Text
          mb='5px'
          fontWeight='bold'
          color={textColor}
          fontSize={{ base: "md", md: "md" }}>
          New Update: {props.info}
        </Text>
        <Flex alignItems='center'>
          <Text
            fontSize={{ base: "sm", md: "sm" }}
            lineHeight='100%'
            color={textColor}>
            A new update for your downloaded item is available!
          </Text>
        </Flex>
      </Flex>
    </>
  );
}