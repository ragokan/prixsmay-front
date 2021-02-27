import { IComment } from "./CommentType"
import { ICommunity } from "./CommunityType"
import { IUser } from "./UserType"
import { IVote } from "./VoteType"

export interface IPost {
  id: number
  title: string
  content: string
  authorId: number
  votes?: IVote[]
  comments?: IComment[]
  community?: ICommunity
  author?: IUser

  createdAt: Date
  updatedAt: Date
}
