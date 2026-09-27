import styles from "./MessageUser.module.css"

function MessageUser() {
  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.box}>
          <img
            className={styles.avatar}
            src="/assets/images/avatar.jpg"
            alt="User avatar"
          />
        </div>
        <div className={styles.details}>
          <span className={styles.name}>Name</span>
          <span className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            iste!
          </span>
        </div>
      </div>
    </article>
  )
}

export default MessageUser
