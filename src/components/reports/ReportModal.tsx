import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, 
    Button, 
    Text, 
    Icon,
    useColorModeValue,
    Flex
} from '@chakra-ui/react'
import { HSeparator } from '../separator/Separator';
import { MdReport} from 'react-icons/md'; 
import Report from "@/components/reports/report";

export default function BackdropExample() {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px)'
        />
    );

    const iconColor = useColorModeValue('brand.500', 'white');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);

    return (
        <Flex
            h='100%'
            alignItems="center"
            justifyContent="center"
        >
            <Button
                fontSize='sm'
                
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >
                <MdReport size={24}/>
            </Button>
            <Modal 
                isCentered 
                isOpen={isOpen} 
                onClose={onClose} 
                scrollBehavior='inside'
                size='md'
            >
                {overlay}
                <ModalContent>
                    <ModalHeader fontSize={'large'}>Report a Beach Issue!</ModalHeader>
                    <ModalCloseButton />
                    <HSeparator/>
                    <ModalBody
                        _hover={{
                            background: 'none',
                            cursor: 'pointer'
                        }}
                        paddingY={6}
                    >
                        <Report/>
                    </ModalBody>
                    <HSeparator/>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
}
