import { createContext } from "react"

interface User {
  id: string
  fullname: string
  created: string
  username: string
  profile: {
    id: string
    status: string
    avatar: string
    birthday: string
    location: string
  }
  _count: {
    followedBy: number
    following: number
  }
}

const UserContext = createContext<{
  user: User | null
  onChangeUser: (newUser: User) => void
}>({
  user: null,
  onChangeUser: () => {},
})

export default UserContext
