import api from "../utils/axios"

interface Post {
  body: string
  id: string
  created: string
  likes: number
  author: {
    username: string
    profile: {
      avatar: string
    }
  }
}

interface ResponseObject {
  data: Post[]
  error: null | string
  message: string
}

interface CreatePostResponse {
  data: Post
  error: null | string
  message: string
}

export async function getAllPosts(): Promise<ResponseObject> {
  const response = await api.get("/posts")
  return response.data
}

export async function createPost({
  body,
  authorId,
}: {
  body: string
  authorId: string
}): Promise<CreatePostResponse> {
  const response = await api.post("/posts", {
    body,
    authorId,
  })
  return response.data
}

export async function getAllPostsByUserId(
  userId: string,
): Promise<ResponseObject> {
  const response = await api.get(`/posts/user/${userId}`)
  return response.data
}

export async function likePost({
  postId,
  likes,
}: {
  postId: string
  likes: number
}) {
  const response = await api.post(`/posts/${postId}/like`, {
    likes,
  })
  return response.data
}

export async function getPostById(postId: string): Promise<CreatePostResponse> {
  const response = await api.get(`/posts/${postId}`)
  return response.data
}
