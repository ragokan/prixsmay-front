import { useMediaQuery, Flex, Stack } from "@chakra-ui/react"
import React from "react"
import { UserState } from "../../state/UserState"
import { IPost } from "../../types/PostType"
import { AuthBanner } from "../utility/AuthBanner"
import { Wrapper } from "../utility/Wrapper"
import PostComponent from "./PostComponent"

export const MainPagePosts: React.FC<{ posts: IPost[] }> = ({ posts }) => {
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
