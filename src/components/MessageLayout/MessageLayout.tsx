import Header from "../Header"
import styles from "./MessageLayout.module.css"
import MessageSidebar from "../MessageSidebar"
import MessageMain from "../MessageMain"
import { Socket, io } from "socket.io-client"
import { useEffect, useState } from "react"

function MessageLayout() {
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
      <MessageMain />
    </article>
  )
}

export default MessageLayout
