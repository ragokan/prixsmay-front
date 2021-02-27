import create, { State, PartialState } from "zustand"
import { devtools } from "zustand/middleware"
import { CurrentView, IPost } from "../types/PostType"

interface IPostState extends State {
  posts: IPost[]
  currentPost: IPost
  currentView: CurrentView
}

export const PostState = create<IPostState>(
  devtools(() => ({ posts: [], currentPost: null, currentView: CurrentView.multiple }))
)

export const setPostState = (partial: PartialState<IPostState>) => PostState.setState(partial)
export const getPostState = PostState.getState
export const subPostState = PostState.subscribe
