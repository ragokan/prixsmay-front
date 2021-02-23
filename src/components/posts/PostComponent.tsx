import { useColorMode, useMediaQuery, Flex, Box, Link, Heading, Divider, Icon, Text } from "@chakra-ui/react"
import React from "react"
import { FaCommentAlt } from "react-icons/fa"
import { EditDeleteButtons } from "./EditDeleteButtonsComponent"
import { VoteComponent } from "./VoteComponent"

interface PostComponentProps {
  isDetailedView?: boolean
}
const PostComponent: React.FC<PostComponentProps> = ({ isDetailedView = false }) => {
  const { colorMode } = useColorMode()
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  const isHomePage = !isDetailedView

  return (
    <Flex p={5} shadow="lg" borderWidth="2px" borderRadius="4px" bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}>
      <VoteComponent onClick={{ up: () => {}, down: () => {} }} isVoted={{}} />
      <Box flex={1} position="relative">
        <Link>
          <Heading fontSize="xl">Okanman</Heading>
        </Link>

        <Text>posted by bukimnan</Text>

        <Flex align="center">
          <Text flex={1} mt={4}>
            Burası açıklama
            <Divider my={2} />
            <Flex>
              <Box color="gray" fontSize="sm">
                <Icon as={FaCommentAlt} /> 5 Comments
              </Box>
              <Divider width={5} orientation="vertical" />
              <Box color="gray" fontSize="sm">
                <Icon as={FaCommentAlt} /> 5 Comments
              </Box>
            </Flex>
          </Text>
        </Flex>
        <Box position="absolute" right="0" top={isMobile ? "20%" : "50%"}>
          <EditDeleteButtons onClick={{ edit: () => {}, delete: () => {} }} />
        </Box>
      </Box>
    </Flex>
  )
}

export default PostComponent