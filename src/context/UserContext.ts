import { createContext } from "react"

interface User {
  username: string
  id: string
  profile: {
    status: string
    avatar: string
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
