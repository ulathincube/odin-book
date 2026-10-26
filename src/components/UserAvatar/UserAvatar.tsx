import styles from "./UserAvatar.module.css"
import useUser from "../../hooks/useUser"
import AvatarContext from "../AvatarContext"
import { useState } from "react"

function UserAvatar() {
  const { user } = useUser()
  const [showContext, setShowContext] = useState<boolean>(false)

  const onShowContext = () => {
    setShowContext(true)
  }

  const onHideContext = () => {
    setShowContext(false)
  }

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
      <button onClick={onShowContext} className={styles.action}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.icon}
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </button>
      {showContext && (
        <AvatarContext
          onHideContext={onHideContext}
          showContext={showContext}
        />
      )}
    </article>
  )
}

export default UserAvatar
