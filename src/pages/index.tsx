import { GetServerSideProps, NextPage } from "next"
import React, { useEffect } from "react"
import { FetchPostsAction } from "../actions/PostActions"
import { MainPagePosts } from "../components/posts/MainPagePosts"
import { PostState, setPostState } from "../state/PostState"
import { CurrentView, IPost } from "../types/PostType"

const Index: NextPage<Props> = ({ page, serverPosts }) => {
  useEffect(() => {
    setPostState((prevState) =>
      page === 1
        ? { posts: serverPosts, currentView: CurrentView.multiple }
        : { posts: [...prevState.posts, ...serverPosts], currentView: CurrentView.multiple }
    )
  }, [])
  const posts = PostState((state) => state.posts)

  return <MainPagePosts posts={posts} />
}

interface Props {
  page: number
  serverPosts: IPost[]
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const page: number = 1
  const posts = await FetchPostsAction({ page })

  return { props: { serverPosts: posts, page } as Props }
}

export default Index
