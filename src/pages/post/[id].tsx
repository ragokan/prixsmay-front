import { Flex, Stack, useMediaQuery } from "@chakra-ui/react"
import { GetServerSideProps, NextPage } from "next"
import React from "react"
import { FetchSinglePostAction } from "../../actions/PostActions"
import PostComponent from "../../components/posts/PostComponent"
import { Wrapper } from "../../components/utility/Wrapper"
import { IPost } from "../../types/PostType"
import { NotEmpty } from "../../utils/NotEmpty"

const SinglePostPage: NextPage<SinglePostPageProps> = ({ post }) => {
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  return NotEmpty(post) ? (
    <Wrapper>
      <Flex>
        <Stack spacing={8} flex={2} marginRight={!isMobile ? 5 : 0}>
          <PostComponent post={post} isDetailedView={true} />
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
    <div>No post is found with this id!</div>
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
