import { Avatar, AvatarBadge, Box, Text, Stack, Divider } from '@chakra-ui/react';

export default function Summary(props: {
    name: string;
    avatar: string | any;
    text: string;
    date: Date; 
    [x: string]: any;
}) {
    const { name, avatar, text, date, ...rest } = props;
    const timeAgo = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 1) {
            return `${days} days ago`;
        } else if (days === 1) {
            return `1 day ago`;
        } else if (hours > 1) {
            return `${hours} hours ago`;
        } else if (hours === 1) {
            return `1 hour ago`;
        } else if (minutes > 1) {
            return `${minutes} minutes ago`;
        } else {
            return `just now`;
        }
    };

    return (
        <Stack spacing={6} maxW="xl" mx="auto" px={4} paddingX={{ base: 4, md: 6 }} {...rest}>
            <Text fontSize="md" fontWeight="bold">Summary Report</Text>

            {/* Review 1 */}
            <Stack direction="row" spacing={4}>
                <Avatar size="md" src={avatar.src}>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Box>
                    <Text fontWeight="semibold">{name}</Text>
                    <Text fontSize="sm" color="gray.500">{timeAgo(date)}</Text>
                    <Divider my={2} />
                    <Text fontSize="sm" color="gray.500">
                        {text}
                    </Text>
                </Box>
            </Stack>

            {/* Review 2 */}
            <Stack direction="row" spacing={4}>
                <Avatar size="md" src={avatar.src}>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Box>
                    <Text fontWeight="semibold">{name}</Text>
                    <Text fontSize="sm" color="gray.500">{timeAgo(date)}</Text>
                    <Divider my={2} />
                    <Text fontSize="sm" color="gray.500">
                        {text}
                    </Text>
                </Box>
            </Stack>

            {/* Review 3 */}
            <Stack direction="row" spacing={4}>
                <Avatar size="md" src={avatar.src}>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Box>
                    <Text fontWeight="semibold">{name}</Text>
                    <Text fontSize="sm" color="gray.500">{timeAgo(date)}</Text>
                    <Divider my={2} />
                    <Text fontSize="sm" color="gray.500">
                        {text}
                    </Text>
                </Box>
            </Stack>
        </Stack>
    );
}
