import create, { State, PartialState } from "zustand"
import { devtools } from "zustand/middleware"
import { IPost } from "../types/PostType"

interface IPostState extends State {
  posts: IPost[]
}

export const PostState = create<IPostState>(devtools(() => ({ posts: [] })))

export const setPostState = (partial: PartialState<IPostState>) => PostState.setState(partial)
export const getPostState = PostState.getState
export const subPostState = PostState.subscribe
