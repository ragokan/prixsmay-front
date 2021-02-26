import { setPostState } from "../state/PostState"
import { IPostResponse } from "../types/ResponseTypes"
import { apios } from "../utils/Apios"

interface FetchPostParams {
  page?: number
  limit?: number
  orderBy?: "newest" | "highest"
}

export const FetchPostsAction = async ({ page = 1, limit = 10, orderBy = "newest" }: FetchPostParams) => {
  const { data } = await apios.get<IPostResponse>("/post", { params: { page, limit, orderBy } })

  setPostState((prevState) => (page === 1 ? { posts: data.posts } : { posts: [...prevState.posts, ...data.posts] }))
}
