import api from "../utils/axios"

interface User {
  id: string
  username: string
  profile: {
    status: string
    avatar: string
  }
}

interface ResponseObject {
  data: User[]
  error: null | string
  message: string
}

interface UserResponse {
  data: User
  error: null | string
  message: string
}

export async function getAllUsers(): Promise<ResponseObject> {
  const response = await api.get("/users")
  return response.data
}

export async function findUserByEmail(email: string): Promise<UserResponse> {
  const response = await api.get("/users", {
    params: {
      email,
    },
  })
  return response.data
}
