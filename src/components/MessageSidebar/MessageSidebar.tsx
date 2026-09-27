import styles from "./MessageSidebar.module.css"
import SearchUser from "../SearchUser"
import MessageUser from "../MessageUser"

function MessageSidebar() {
  return (
    <aside className={styles.wrapper}>
      <SearchUser />
      <article className={styles.users}>
        <MessageUser />
      </article>
    </aside>
  )
}

export default MessageSidebar
