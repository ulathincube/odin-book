import styles from "./PopularUser.module.css"

function PopularUser() {
  return (
    <li className={styles.wrapper}>
      <div className={styles.user}>
        <figure className={styles.container}>
          <div className={styles.box}>
            <img
              className={styles.image}
              src="/assets/images/avatar.jpg"
              alt="User avatar"
            />
          </div>
          <div className={styles.details}>
            <h3 className={styles.username}>Lorem, ipsum.</h3>
            <p className={styles.bio}>Lorem ipsum dolor sit amet.</p>
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
