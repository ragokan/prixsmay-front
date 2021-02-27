import { Box, chakra, Flex, useColorMode, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { UserState } from "../../state/UserState"
import { IPost } from "../../types/PostType"
import { EditDeleteButtons } from "./EditDeleteButtonsComponent"
import { PostBody } from "./PostBody"
import { PostHeader } from "./PostHeader"
import { PostVotes } from "./PostVotes"

interface PostComponentProps {
  post: IPost
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
  const { colorMode } = useColorMode()
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  const userId = UserState((state) => state.user?.id || 0)

  const postComp = (
    <Flex p={5} shadow="lg" borderWidth="2px" borderRadius="4px" bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}>
      <PostVotes post={post} userId={userId} />
      <Box flex={1} position="relative">
        <PostHeader post={post} />
        <PostBody post={post} />
        <Box position="absolute" right="0" top={isMobile ? "20%" : "50%"} mt={-4}>
          <EditDeleteButtons onClick={{ edit: () => {}, delete: () => {} }} />
        </Box>
      </Box>
    </Flex>
  )

  return <chakra.article>{postComp}</chakra.article>
}

export default PostComponent
