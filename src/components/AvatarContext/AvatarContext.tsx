import styles from "./AvatarContext.module.css"
import useUser from "../../hooks/useUser"

function AvatarContext() {
  const { user } = useUser()

  return (
    <article className={styles.wrapper}>
      <button className={styles.action}>Add Another Account</button>
      <button className={styles.action}>
        <span className={styles.text}>Log Out</span>
        <span className={styles.username}>@{user!.username}</span>
      </button>
    </article>
  )
}

export default AvatarContext
