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
  contact: null | User
  onChangeContact: (newContact: User) => void
}>({
  contact: null,
  onChangeContact: () => {},
})

export default ChatContext
