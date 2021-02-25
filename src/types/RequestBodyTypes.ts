export interface RegisterBodyType {
  username: string
  email: string
  password: string
  pictureUrl?: string
}

export interface VoteBodyType {
  postId: number
  type: "up" | "down"
}

export interface PostBodyType {
  title: string
  content: string
  communityId?: number
}

export interface PasswordResetMailBodyType {
  email: string
}

export interface LoginBodyType {
  email: string
  password: string
}

export interface EmailBodyType {
  email: string
}

export interface CommunityBodyType {
  name: string
  description: string
  picture?: string
}

export interface CommentBodyType {
  text: string
  postId?: number
  commentId?: number
}

export interface CommentUpdateBodyType {
  text: string
}

export interface CommentVoteBodyType {
  commentId: number
  type: "up" | "down"
}
