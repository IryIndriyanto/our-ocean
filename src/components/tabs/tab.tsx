import { Center, Flex } from '@chakra-ui/react'
import {
  Box,
  Tooltip,
  Button,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react'
import { HSeparator } from '@/components/separator/Separator'
import { MdBookmarks, MdShare } from 'react-icons/md'
import ReviewCard from '../card/ReviewCard'
import ReportFormModal from '@/components/reports/ReportModal'
import useIssue from '@/hooks/useIssue'

const TabIssue = ({ locationId, locationName, locationDescription }: any) => {
  const { issue, isLoading, error } = useIssue(locationId)

  return (
    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab>Issues</Tab>
        <Tab>About</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="brand.500"
        borderRadius="1px"
      />
      <HSeparator />
      <TabPanels>
        <TabPanel>
          <Flex justifyContent="space-between">
            <Flex direction="column" alignItems="center">
              <Button>
                <MdBookmarks size={24} />
              </Button>
              <Text>Save</Text>
            </Flex>
            <Flex direction="column" alignItems="center">
              <ReportFormModal
                locationId={locationId}
                locationName={locationName}
              />
              <Text>Report</Text>
            </Flex>
            <Flex direction="column" alignItems="center">
              <Button>
                <MdShare size={24} />
              </Button>
              <Text>Share</Text>
            </Flex>
          </Flex>
          <HSeparator w={'auto'} mx={-4} my={4} />
          {isLoading ? (
            <Center>Loading...</Center>
          ) : error?.status === 404 ? (
            <Center>No report yet</Center>
          ) : (
            <ReviewCard
              issueId={issue?.id}
              text={issue?.issue_description}
              image={issue?.issue_image}
              avatar={''}
              name="Anonymous"
              job="Volunteer"
              title={issue?.issue_title}
            />
          )}
        </TabPanel>
        <TabPanel>
          <Box minH={'70vh'}>{locationDescription}</Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabIssue
