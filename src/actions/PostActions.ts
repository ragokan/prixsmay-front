import { setLoading } from "../components/posts/PostVotes"
import { getPostState, setPostState } from "../state/PostState"
import { CurrentView } from "../types/PostType"
import { IPostResponse, IVoteResponse } from "../types/ResponseTypes"
import { IVote, VoteType } from "../types/VoteType"
import { apios } from "../utils/Apios"
import { FetchPostParams } from "./utils/PostTypes"

export const FetchPostsAction = async ({ page = 1, limit = 10, orderBy = "newest" }: FetchPostParams) => {
  const { data } = await apios.get<IPostResponse>("/post", { params: { page, limit, orderBy } })

  return data.posts
}

export const FetchSinglePostAction = async (postId: number) => {
  const { data } = await apios.get<IPostResponse>(`/post/${postId}`)

  return data.post
}

export const VotePostAction = async (postId: number, type: VoteType, setLoading: setLoading) => {
  setLoading(type, true)

  const { data } = await apios.post<IVoteResponse>("/post/vote", { postId, type })
  const currentView = getPostState().currentView
  if (currentView === CurrentView.single) {
    setPostState((prevState) => ({
      currentPost: { ...prevState.currentPost, votes: data.votes as IVote[] },
    }))
  } else if (currentView === CurrentView.multiple) {
    setPostState((prevState) => ({
      posts: prevState.posts.map((post) => (post.id === postId ? { ...post, votes: data.votes as IVote[] } : post)),
    }))
  }

  setLoading(type, false)

  return data.votes
}
