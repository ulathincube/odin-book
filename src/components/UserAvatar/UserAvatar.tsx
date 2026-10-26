import styles from "./UserAvatar.module.css"
import useUser from "../../hooks/useUser"

function UserAvatar() {
  const { user } = useUser()

  console.log({ user })

  if (!user) return

  return (
    <article className={styles.wrapper}>
      <div className={styles.box}>
        <img
          className={styles.avatar}
          src={user!.profile.avatar}
          alt={user!.username}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{user!.fullname}</h3>
        <p className={styles.username}>@{user!.username}</p>
      </div>
    </article>
  )
}

export default UserAvatar
