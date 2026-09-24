import styles from "./PopularUser.module.css"
import { Link } from "react-router"

interface Props {
  id: string
  username: string
  bio: string
  avatar: string
}

function PopularUser({ username, bio, avatar, id }: Props) {
  return (
    <li className={styles.wrapper}>
      <Link to={`/users/${id}`} className={styles.link}>
        <div className={styles.user}>
          <figure className={styles.container}>
            <div className={styles.box}>
              <img className={styles.image} src={avatar} alt="User avatar" />
            </div>
            <div className={styles.details}>
              <h3 className={styles.username}>{username}</h3>
              <p className={styles.bio}>{bio}</p>
            </div>
          </figure>
        </div>
      </Link>
    </li>
  )
}

export default PopularUser
