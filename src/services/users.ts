import api from "../utils/axios"

interface User {
  id: string
  username: string
  profile: {
    status: string
    avatar: string
  }
}

interface Post {
  id: string
  body: string
  created: string
  likes: number
}

interface ExpandedUser extends User {
  fullname: string
  profile: {
    id: string
    status: string
    avatar: string
    birthday: string
    location: string
  }
  posts: Post[]
  followedBy: User[]
  following: User[]
  _count: {
    followedBy: number
    following: number
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

interface ExpandedUserResponse {
  data: ExpandedUser
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

export async function getAllUserData(
  userId: string,
): Promise<ExpandedUserResponse> {
  const response = await api.get(`/users/${userId}`)
  return response.data
}

export async function followUser({
  currentUser,
  userToFollow,
}: {
  currentUser: string
  userToFollow: string
}): Promise<{ data: string; error: Error | string; message: string }> {
  const response = await api.post(
    `/users/${currentUser}/follow/${userToFollow}`,
  )
  return response.data
}
