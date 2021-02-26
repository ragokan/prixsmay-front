import { useColorMode, useMediaQuery, Flex, Box, Link, Heading, Divider, Icon, Text, chakra } from "@chakra-ui/react"
import React from "react"
import { FaCommentAlt } from "react-icons/fa"
import { IPost } from "../../types/PostType"
import { EditDeleteButtons } from "./EditDeleteButtonsComponent"
import { VoteComponent } from "./VoteComponent"

interface PostComponentProps {
  isDetailedView?: boolean
  post: IPost
}
const PostComponent: React.FC<PostComponentProps> = ({ isDetailedView = false, post }) => {
  const { colorMode } = useColorMode()
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  const isHomePage = !isDetailedView

  const postComp = (
    <Flex p={5} shadow="lg" borderWidth="2px" borderRadius="4px" bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}>
      <VoteComponent onClick={{ up: () => {}, down: () => {} }} isVoted={{}} />
      <Box flex={1} position="relative">
        <Link>
          <Heading fontSize="xl">{post.title}</Heading>
        </Link>
        <Text>posted by bukimnan</Text>
        <Flex align="center">
          <Text flex={1} mt={4}>
            <Text noOfLines={3}>
              {new Array(20)
                .fill(() => "")
                .map((val, index) => (
                  <chakra.div key={index}>
                    Hoppalaa
                    <Divider visibility="hidden" height="3" />
                  </chakra.div>
                ))}
            </Text>
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
        <Box position="absolute" right="0" top={isMobile ? "20%" : "50%"} mt={-4}>
          <EditDeleteButtons onClick={{ edit: () => {}, delete: () => {} }} />
        </Box>
      </Box>
    </Flex>
  )

  return <chakra.article>{postComp}</chakra.article>
}

export default PostComponent
