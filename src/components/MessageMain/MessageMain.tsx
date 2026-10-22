import styles from "./MessageMain.module.css"
import { Link } from "react-router"
import { parseDate } from "../../utils/luxon"
import useContact from "../../hooks/useContact"

function MessageMain() {
  const { contact } = useContact()

  return (
    <main className={styles.wrapper}>
      {contact && (
        <>
          <section className={styles.header}>
            <figure className={styles.container}>
              <div className={styles.box}>
                <img
                  src={contact.profile.avatar}
                  alt={contact.username}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.details}>
                <p className={styles.username}>{contact.username}</p>
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
                <p className={styles.date}>
                  Joined {parseDate(contact.created)}
                </p>
                <p className={styles.followers}>
                  {contact._count.followedBy} Followers
                </p>
                <div className={styles.actions}>
                  <Link className={styles.link} to={`/users/${contact.id}`}>
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
