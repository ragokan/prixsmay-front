import { Flex, Box, Divider, Icon } from "@chakra-ui/react"
import React from "react"
import { FaCommentAlt } from "react-icons/fa"
import ReactMarkdown from "react-markdown"
import { IPost } from "../../types/PostType"
import { Renderer } from "../../utils/Renderer"
import { BothLink } from "../utility/BothLink"

export const PostBody: React.FC<{ post: IPost }> = ({ post }) => (
  <Flex align="center">
    <Box flex={1} mt={4}>
      <Box isTruncated width="auto" marginRight={100} noOfLines={4}>
        <ReactMarkdown renderers={Renderer()} children={post.content} />
      </Box>

      <Divider my={2} />
      <BothLink href={`/post/${post.id}`}>
        <Flex>
          <Box color="gray" fontSize="sm">
            <Icon as={FaCommentAlt} /> {post.comments.length} Comment{post.comments.length > 1 && "s"}
          </Box>
          <Divider width={5} orientation="vertical" />
        </Flex>
      </BothLink>
    </Box>
  </Flex>
)
