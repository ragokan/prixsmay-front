import { Flex, Stack, useMediaQuery } from "@chakra-ui/react"
import { GetServerSideProps, NextPage } from "next"
import React from "react"
import { FetchPostsAction } from "../actions/PostActions"
import PostComponent from "../components/posts/PostComponent"
import { AuthBanner } from "../components/utility/AuthBanner"
import { Wrapper } from "../components/utility/Wrapper"
import { PostState, setPostState } from "../state/PostState"
import { UserState } from "../state/UserState"
import { IPost } from "../types/PostType"

const Index: NextPage<Props> = ({ page, serverPosts }) => {
  setPostState((prevState) => (page === 1 ? { posts: serverPosts } : { posts: [...prevState.posts, ...serverPosts] }))
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

interface Props {
  page: number
  serverPosts: IPost[]
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const page: number = 1
  const { posts } = await FetchPostsAction({ page })

  return { props: { serverPosts: posts, page } as Props }
}

export default Index
