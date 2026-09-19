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

export async function getAllPosts(): Promise<ResponseObject> {
  const response = await api.get("/posts")
  return response.data
}
