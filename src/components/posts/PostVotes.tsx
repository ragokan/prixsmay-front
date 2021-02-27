import React, { useState } from "react"
import { VotePostAction } from "../../actions/PostActions"
import { IPost } from "../../types/PostType"
import { VoteType } from "../../types/VoteType"
import { VoteComponent } from "./VoteComponent"

export type setLoading = (type: VoteType, value: boolean) => void

export const PostVotes: React.FC<{ post: IPost; userId: number }> = ({ post, userId }) => {
  const [isLoading, setIsLoading] = useState<{ up?: boolean; down?: boolean }>({ down: false, up: false })
  const setLoading: setLoading = (type: "up" | "down", value: boolean) =>
    setIsLoading((prev) => ({ ...prev, [type]: value }))

  return (
    <VoteComponent
      onClick={{
        up: () => VotePostAction(post.id, VoteType.up, setLoading),
        down: () => VotePostAction(post.id, VoteType.down, setLoading),
      }}
      isVoted={{
        up: post.votes.findIndex((v) => v.userId === userId && v.type === VoteType.up) !== -1,
        down: post.votes.findIndex((v) => v.userId === userId && v.type === VoteType.down) !== -1,
      }}
      totalVotes={
        post.votes.filter((v) => v.type === VoteType.up).length -
        post.votes.filter((v) => v.type === VoteType.down).length
      }
      isLoading={isLoading}
    />
  )
}
