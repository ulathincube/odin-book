import api from "../utils/axios"

interface Post {
  body: string
  id: string
  created: string
  likes: string
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
