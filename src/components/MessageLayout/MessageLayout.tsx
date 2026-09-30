import Header from "../Header"
import styles from "./MessageLayout.module.css"
import MessageSidebar from "../MessageSidebar"
import MessageMain from "../MessageMain"
import { Socket, io } from "socket.io-client"
import { useEffect, useState } from "react"

interface User {
  id: string
  username: string
  profile: {
    id: string
    status: string
    avatar: string
    birthday: string
    location: string
  }
}

interface Props {
  user?: User | null
}

function MessageLayout({ user = null }: Props) {
  const [webSocket, setWebSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const runEffect = () => {
      const socket = io(import.meta.env.VITE_SOCKET_URL)
      setWebSocket(socket)
    }
    runEffect()

    return () => setWebSocket(null)
  }, [])

  return (
    <article className={styles.wrapper}>
      <Header />
      <MessageSidebar />
      <MessageMain user={user} />
    </article>
  )
}

export default MessageLayout
