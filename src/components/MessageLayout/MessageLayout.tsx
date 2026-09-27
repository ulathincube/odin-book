import Header from "../Header"
import styles from "./MessageLayout.module.css"
import MessageSidebar from "../MessageSidebar"
import MessageMain from "../MessageMain"

function MessageLayout() {
  return (
    <article className={styles.wrapper}>
      <Header />
      <MessageSidebar />
      <MessageMain />
    </article>
  )
}

export default MessageLayout
