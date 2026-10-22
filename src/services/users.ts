import api from "../utils/axios"

interface CreateUser {
  fullname: string
  username: string
  password: string
  email: string
}

interface User {
  id: string
  username: string
  fullname: string
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
  _count: {
    comments: number
  }
}

interface ExpandedUser extends User {
  fullname: string
  username: string
  created: string
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

interface ExpandedUsersResponse {
  data: ExpandedUser[]
  error: null | string
  message: string
}

interface User {
  username: string
  password: string
  email: string
  fullname: string
}

interface NormalResponse {
  data: string
  error: Error | string
  message: string
}

export async function getAllUsers(): Promise<ExpandedUsersResponse> {
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
}): Promise<NormalResponse> {
  const response = await api.post(
    `/users/${currentUser}/follow/${userToFollow}`,
  )
  return response.data
}

export async function createUser(user: CreateUser): Promise<NormalResponse> {
  const response = await api.post("/users/register", user)
  return response.data
}

export async function loginUser({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<NormalResponse> {
  const response = await api.post("/users/login", {
    email,
    password,
  })
  return response.data
}
