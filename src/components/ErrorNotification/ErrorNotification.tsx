import styles from "./ErrorNotification.module.css"

function ErrorNotification() {
  return (
    <article className={styles.wrapper}>
      <h3 className={styles.title}>Hmm...something went wrong</h3>
    </article>
  )
}

export default ErrorNotification
