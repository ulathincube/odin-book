import { createContext } from "react"

interface User {
  id: string
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

const ChatContext = createContext<{
  contact: null | User
  onChangeContact: (newContact: User) => void
}>({
  contact: null,
  onChangeContact: () => {},
})

export default ChatContext
