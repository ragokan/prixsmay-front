import { Flex, Stack, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { FetchPostsAction } from "../actions/PostActions"
import PostComponent from "../components/posts/PostComponent"
import { AuthBanner } from "../components/utility/AuthBanner"
import { Wrapper } from "../components/utility/Wrapper"
import { PostState } from "../state/PostState"
import { UserState } from "../state/UserState"

// Fetch posts for ssr
;(async () => {
  await FetchPostsAction({})
})()

const Index = () => {
  const posts = PostState((state) => state.posts)
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  const isLogged = UserState((state) => state.isLogged)

  return (
    <Wrapper>
      <Flex>
        <Stack spacing={8} flex={2} marginRight={!isMobile ? 5 : 0}>
          <AuthBanner isLogged={isLogged} />
          {posts.map((post, index) => (
            <PostComponent key={index} post={post} />
          ))}
        </Stack>
        {!isMobile && (
          <Stack spacing={8} flex={1}>
            {new Array(20)
              .fill(() => "")
              .map((val, index) => (
                <div key={index}>Hop</div>
              ))}
          </Stack>
        )}
      </Flex>
    </Wrapper>
  )
}

export default Index
