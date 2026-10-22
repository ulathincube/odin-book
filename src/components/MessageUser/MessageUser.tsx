import styles from "./MessageUser.module.css"
import useContact from "../../hooks/useContact"

interface User {
  id: string
  created: string
  _count: {
    followedBy: number
    following: number
  }
  username: string
  fullname: string
  profile: {
    id: string
    status: string
    avatar: string
    birthday: string
    location: string
  }
}

interface Props {
  user: User
  activeId: string
  onChangeActiveId: (activeId: string) => void
}

function MessageUser({ user, activeId, onChangeActiveId }: Props) {
  const { onChangeContact } = useContact()

  const onButtonClick = () => {
    onChangeActiveId(user.id)
    onChangeContact(user)
  }

  return (
    <article className={styles.wrapper}>
      <button
        onClick={onButtonClick}
        className={`${styles.container} ${user.id === activeId ? styles.active : undefined}`}
      >
        <div className={styles.box}>
          <img
            className={styles.avatar}
            src={user.profile.avatar}
            alt={user.fullname}
          />
        </div>
        <div className={styles.details}>
          <span className={styles.name}>{user.fullname}</span>
          <span className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            iste!
          </span>
        </div>
      </button>
    </article>
  )
}

export default MessageUser
