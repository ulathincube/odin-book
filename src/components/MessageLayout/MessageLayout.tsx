import Header from "../Header"
import styles from "./MessageLayout.module.css"
import MessageSidebar from "../MessageSidebar"
import MessageMain from "../MessageMain"
import { Socket, io } from "socket.io-client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

function MessageLayout() {
  const [, setWebSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const runEffect = () => {
      const socket = io(import.meta.env.VITE_SOCKET_URL)
      setWebSocket(socket)
    }
    runEffect()

    return () => setWebSocket(null)
  }, [])

  // console.log({ type: Array.isArray(cachedUsers?.data) })

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <Header />
      <MessageSidebar />
      <MessageMain />
    </motion.article>
  )
}

export default MessageLayout
