import { Heading, Text } from "@chakra-ui/react"
import React from "react"
import { IPost } from "../../types/PostType"
import { BothLink } from "../utility/BothLink"

export const PostHeader: React.FC<{ post: IPost }> = ({ post }) => (
  <>
    <BothLink href={`/post/${post.id}`}>
      <Heading fontSize="xl">{post.title}</Heading>
    </BothLink>
    <Text>
      Posted by{" "}
      <BothLink href={`/profile/${post.author?.username || "usernotfound"}`}>
        {post.author?.username || "usernotfound"}
      </BothLink>
    </Text>
  </>
)
