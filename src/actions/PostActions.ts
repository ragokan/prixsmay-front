import { setLoading } from "../components/posts/PostVotes"
import { setPostState } from "../state/PostState"
import { IPostResponse, IVoteResponse } from "../types/ResponseTypes"
import { IVote, VoteType } from "../types/VoteType"
import { apios } from "../utils/Apios"

interface FetchPostParams {
  page?: number
  limit?: number
  orderBy?: "newest" | "highest"
}

export const FetchPostsAction = async ({ page = 1, limit = 10, orderBy = "newest" }: FetchPostParams) => {
  const { data } = await apios.get<IPostResponse>("/post", { params: { page, limit, orderBy } })

  return data
}

export const VotePostAction = async (postId: number, type: VoteType, setLoading: setLoading) => {
  setLoading(type, true)
  const { data } = await apios.post<IVoteResponse>("/post/vote", { postId, type })

  setPostState((prevState) => ({
    posts: prevState.posts.map((post) => (post.id === postId ? { ...post, votes: data.votes as IVote[] } : post)),
  }))
  setLoading(type, false)
}
