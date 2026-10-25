import styles from "./Error.module.css"

function Error() {
  return (
    <article className={styles.wrapper}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Something went wrong</h1>
      </div>
      <div className={styles.description}>
        <p className={styles.text}>
          An unexpected error has occurred. Please try again or contact us if
          the issue persists
        </p>
      </div>
      <div className={styles.actions}>
        <button className={styles.try}>Try Again</button>
        <button className={styles.contact}>Contact Us</button>
      </div>
    </article>
  )
}

export default Error
