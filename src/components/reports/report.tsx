'use client';

import React from 'react';
// Chakra imports
import {
    Box,
    Button,
    Select,
    Textarea,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    useColorModeValue,
    Center,
} from '@chakra-ui/react';
// Assets
import Link from 'next/link';

export default function Report() {
    // Chakra color mode
    const textColor = useColorModeValue('navy.700', 'white');
    const textColorSecondary = 'gray.400';
    const brandStars = useColorModeValue('brand.500', 'brand.400');
    const [show, setShow] = React.useState(false);
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
            <Box me="auto">
                <Heading color={textColor} fontSize="36px" mb="10px">
                    Report a Beach Issue
                </Heading>
                <Text
                mb="36px"
                ms="4px"
                color={textColorSecondary}
                fontWeight="400"
                fontSize="md"
                >
                    Help us improve the conditions at your local beach!
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
                    htmlFor="issue-type"
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                    >
                        Issue Type<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Select
                    id="issue-type"
                    variant="main"
                    fontSize="sm"
                    ms={{ base: '0px', md: '0px' }}
                    defaultValue="Trash"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    >
                    <option value="trash">Trash</option>
                    <option value="pollution">Pollution</option>
                    <option value="erosion">Erosion</option>
                    <option value="unsafe">Unsafe</option>
                    </Select>
                    <FormLabel
                    htmlFor="description"
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                    >
                        Description<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                    as={Textarea}
                    isRequired={true}
                    id="description"
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: '0px', md: '0px' }}
                    type="text"
                    placeholder="describe the issue"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    />
                    <FormLabel
                    htmlFor="photo"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    display="flex"
                    >
                        Upload Photo<Text color={brandStars}>*</Text>
                    </FormLabel>
                        <Input
                        isRequired={true}
                        id="photo"
                        fontSize="sm"
                        ms={{ base: '0px', md: '0px' }}
                        mb="24px"
                        size="lg"
                        type="file"
                        fontWeight="500"
                        variant="auth"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            '&::-webkit-file-upload-button': {
                                all: 'unset',
                                cursor: 'pointer',
                                border: 'none',
                                padding: '10px 10px',
                                backgroundColor: 'transparent',
                                borderRadius: '5px',
                            },
                            '&::-webkit-file-upload-button:hover': {
                                backgroundColor: 'none',
                            },
                        }}
                        />

                        <Button
                        fontSize="sm"
                        variant="brand"
                        fontWeight="500"
                        w="100%"
                        h="50"
                        mb="24px"
                        >
                            Submit Report
                        </Button>
                </FormControl>
            </Flex>
        </Flex>
    );
}