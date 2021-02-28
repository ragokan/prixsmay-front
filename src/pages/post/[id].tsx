import { Flex, Heading, Stack, useMediaQuery } from "@chakra-ui/react"
import { GetServerSideProps, NextPage } from "next"
import React, { useEffect } from "react"
import { FetchSinglePostAction } from "../../actions/PostActions"
import { Head } from "../../components/navigation/links/Head"
import PostComponent from "../../components/posts/PostComponent"
import { Container } from "../../components/utility/Container"
import { Wrapper } from "../../components/utility/Wrapper"
import { PostState, setPostState } from "../../state/PostState"
import { CurrentView, IPost } from "../../types/PostType"
import { NotEmpty } from "../../utils/NotEmpty"

const SinglePostPage: NextPage<SinglePostPageProps> = ({ post }) => {
  useEffect(() => {
    setPostState({ currentPost: post, currentView: CurrentView.single })
  }, [])
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  const currentPost = PostState((state) => state.currentPost)

  return NotEmpty(post) ? (
    <Wrapper>
      <Flex>
        <Head title={post.title} />
        <Stack spacing={8} flex={2} marginRight={!isMobile ? 5 : 0}>
          <PostComponent post={currentPost || post} />
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
  ) : (
    <Container minH="50vh" d="flex">
      <Heading textAlign="center" m="auto">
        No post is found with this id!
      </Heading>
    </Container>
  )
}

interface SinglePostPageProps {
  post: IPost
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postId: number = typeof params.id === "string" ? parseInt(params.id) : -1
  let post
  post = postId !== -1 ? await FetchSinglePostAction(postId).catch((_) => (post = {})) : {}

  return { props: { post } as SinglePostPageProps }
}

export default SinglePostPage
