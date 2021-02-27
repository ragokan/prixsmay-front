import React from "react"
import { IPost } from "../../types/PostType"
import { VoteType } from "../../types/VoteType"
import { VoteComponent } from "./VoteComponent"

export const PostVotes: React.FC<{ post: IPost; userId: number }> = ({ post, userId }) => (
  <VoteComponent
    onClick={{ up: () => {}, down: () => {} }}
    isVoted={{
      up: post.votes.findIndex((v) => v.userId === userId && v.type === VoteType.up) !== -1,
      down: post.votes.findIndex((v) => v.userId === userId && v.type === VoteType.down) !== -1,
    }}
    totalVotes={
      post.votes.filter((v) => v.type === VoteType.up).length -
      post.votes.filter((v) => v.type === VoteType.down).length
    }
  />
)
