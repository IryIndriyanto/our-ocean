import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Switch,
  Text,
  FormControl,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Component() {
  const textColor = useColorModeValue('gray.500', 'gray.500')
  const textColorBrand = useColorModeValue('brand.400', 'brand.700')
  const menuColor = useColorModeValue('white', 'navy.800')

  return (
    <Flex align="center" justify="center" minH="100vh" py={12}>
      <Box
        w="full"
        maxW="3xl"
        bg={menuColor}
        rounded="lg"
        shadow="lg"
        p={{ base: 6, sm: 10 }}
      >
        <Stack spacing={8}>
          {/* Profile & Password Section */}
          <Flex direction={{ base: 'column', md: 'row' }} p={2}>
            {/* Profile Section */}
            <Stack
              flex="1"
              spacing={4}
              mr={{ base: 0, md: 8 }}
              mb={{ base: 8, md: 0 }}
            >
              <Heading as="h2" fontSize="xl" fontWeight="bold">
                Profile
              </Heading>
              <FormControl>
                <FormLabel htmlFor="name" fontSize="sm" color={textColor}>
                  Name
                </FormLabel>
                <Input
                  variant="outline"
                  size="sm"
                  placeholder="Name"
                  id="name"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" fontSize="sm" color={textColor}>
                  Email
                </FormLabel>
                <Input
                  variant="outline"
                  size="sm"
                  placeholder="john@example.com"
                  type="email"
                  id="email"
                />
              </FormControl>
              <Stack>
                <Text fontSize="sm" fontWeight="medium">
                  Profile Picture
                </Text>
                <Flex align="center">
                  <Box
                    h="12"
                    w="12"
                    rounded="full"
                    overflow="hidden"
                    bg="gray.100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-full w-full text-gray.300"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </Box>
                  <Button
                    ml={5}
                    size="sm"
                    variant="outline"
                    borderColor="gray.300"
                    borderRadius={8}
                  >
                    Change
                  </Button>
                </Flex>
              </Stack>
            </Stack>

            {/* Notifications Section */}
            <Stack
              flex="1"
              spacing={4}
              mr={{ base: 0, md: 8 }}
              mb={{ base: 8, md: 0 }}
            >
              <Heading as="h2" fontSize="xl" fontWeight="bold">
                Notifications
              </Heading>
              <Stack spacing={2}>
                <Stack direction="row" justify="space-between" align="center">
                  <Stack>
                    <FormLabel
                      htmlFor="email-notifications"
                      fontSize="sm"
                      color={textColor}
                    >
                      Email Notifications
                    </FormLabel>
                    <Text fontSize="sm" color={textColor}>
                      Receive email notifications for important updates.
                    </Text>
                  </Stack>
                  <Switch id="email-notifications" color={textColorBrand} />
                </Stack>
                <Stack direction="row" justify="space-between" align="center">
                  <Stack>
                    <FormLabel
                      htmlFor="push-notifications"
                      fontSize="sm"
                      color={textColor}
                    >
                      Push Notifications
                    </FormLabel>
                    <Text fontSize="sm" color={textColor}>
                      Receive push notifications for real-time updates.
                    </Text>
                  </Stack>
                  <Switch id="push-notifications" color={textColorBrand} />
                </Stack>
              </Stack>
            </Stack>
          </Flex>

          {/* Save & Delete Account Section */}
          <Stack spacing={2}>
            <Heading
              as="h2"
              fontSize="xl"
              fontWeight="bold"
              color="red.500"
              mt={2}
            >
              Delete Account
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Permanently delete your account and all associated data.
            </Text>
            <Button
              bg="red.500"
              color="white"
              _hover={{ bg: 'red.600' }}
              size="sm"
              borderRadius={8}
            >
              Delete Account
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  )
}
