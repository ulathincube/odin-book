import styles from "./MessageMain.module.css"
import { Link } from "react-router"

interface User {
  username: string
  avatar: string
  created: string
  followers: number
}

interface Props {
  user?: User | null
}

function MessageMain({ user = null }: Props) {
  return (
    <main className={styles.wrapper}>
      {user && (
        <>
          <section className={styles.header}>
            <figure className={styles.container}>
              <div className={styles.box}>
                <img
                  src={user.avatar}
                  alt={user.username}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.details}>
                <p className={styles.username}>{user.username}</p>
              </div>
            </figure>
            <article className={styles.article}>
              <button className={styles.more}>
                <svg
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </article>
          </section>
          <section className={styles.main}>
            <article className={styles.messages}>
              <div className={styles.sticker}>
                <p className={styles.date}>Joined 20 June 2010</p>
                <p className={styles.followers}>2000 Followers</p>
                <div className={styles.actions}>
                  <Link className={styles.link} to="">
                    View Profile
                  </Link>
                </div>
              </div>
            </article>
            <form className={styles.form}>
              <div className={styles.group}>
                <textarea
                  className={styles.field}
                  placeholder="Message..."
                ></textarea>
              </div>
            </form>
          </section>
        </>
      )}
    </main>
  )
}

export default MessageMain
