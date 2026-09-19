import styles from "./PopularUser.module.css"

interface Props {
  username: string
  bio: string
  avatar: string
}

function PopularUser({ username, bio, avatar }: Props) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.user}>
        <figure className={styles.container}>
          <div className={styles.box}>
            <img className={styles.image} src={avatar} alt="User avatar" />
          </div>
          <div className={styles.details}>
            <h3 className={styles.username}>{username}</h3>
            <p className={styles.bio}>{bio}</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.action}>Follow</button>
          </div>
        </figure>
      </div>
    </li>
  )
}

export default PopularUser
