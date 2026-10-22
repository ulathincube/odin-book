import { createContext } from "react"

interface User {
  username: string
  id: string
  profile: {
    status: string
    avatar: string
  }
}

const ChatContext = createContext<{
  user: null | User
  onChangeUser: (newUser: User) => void
}>({
  user: null,
  onChangeUser: () => {},
})

export default ChatContext
