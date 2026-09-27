import styles from "./SearchUser.module.css"

function SearchUser() {
  return (
    <article className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.group}>
          <input className={styles.field} value="" />
        </div>
      </form>
    </article>
  )
}

export default SearchUser
