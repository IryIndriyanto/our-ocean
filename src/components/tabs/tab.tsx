import useIssue from '@/hooks/useIssue'
import { Flex } from '@chakra-ui/react'
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
import Summary from '../card/Summary'

const TabIssue = ({ locationId, locationName }: any) => {
  const { issue, isLoading, error } = useIssue(locationId)
  return (
    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Reviews</Tab>
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
            <Tooltip label="Save Location" hasArrow placement="top">
              <Flex direction="column" alignItems="center">
                <Button>
                  <MdBookmarks size={24} />
                </Button>
                <Text>Save</Text>
              </Flex>
            </Tooltip>
            <Tooltip label="Report an Issue" hasArrow placement="top">
              <Flex direction="column" alignItems="center">
                <ReportFormModal
                  locationId={locationId}
                  locationName={locationName}
                />
                <Text>Report</Text>
              </Flex>
            </Tooltip>
            <Tooltip label="Share Location" hasArrow placement="top">
              <Flex direction="column" alignItems="center">
                <Button>
                  <MdShare size={24} />
                </Button>
                <Text>Share</Text>
              </Flex>
            </Tooltip>
          </Flex>
          <HSeparator w={'auto'} mx={-4} my={4}/>
          <Box mt={2} ml={-4} alignItems="flex-start">
            <Summary
              name={'iry'}
              image={''}
              avatar={''}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              date={new Date()}
            />
          </Box>
        </TabPanel>
        <TabPanel>
          <ReviewCard
            text="With Chakra UI, I wanted to sync the speed of development with the speed
                    of design. I wanted the developer to be just as excited as the designer to
                    create a screen."
            image={
              'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            avatar={''}
            name="Adela Parkson"
            job="Product Designer"
          />
        </TabPanel>
        <TabPanel>
          <Box minH={'65vh'}>{issue?.issue_description}ppp</Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabIssue
