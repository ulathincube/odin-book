import api from "../utils/axios"

interface CreateComment {
  body: string
  postId: string
  authorId: string
}

interface CreateCommentResponse {
  data: CreateComment
  error: Error | null
  message: string
}

interface Comment {
  id: string
  body: string
  created: string
  likes: number
  author: {
    id: string
    username: string
    fullname: string
    email: string
  }
}

interface AllCommentsResponse {
  data: Comment[]
  error: Error | null
  message: string
}

export async function createComment({
  body,
  postId,
  authorId,
}: CreateComment): Promise<CreateCommentResponse> {
  const response = await api.post(`/comments/${postId}`, {
    authorId,
    body,
  })
  return response.data
}

export async function getComments(
  postId: string,
): Promise<AllCommentsResponse> {
  const response = await api.get(`/comments/${postId}`)
  return response.data
}
