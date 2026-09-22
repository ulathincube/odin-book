import styles from "./Profile.module.css"
import { Link } from "react-router"
import UserPosts from "../UserPosts"
import UserPost from "../UserPost"

function Profile() {
  return (
    <main className={styles.main}>
      <div className={styles.wallpaper}>
        <img
          src="/assets/images/mountains.webp"
          className={styles.background}
          alt="Background image"
        />
        <div className={styles.box}>
          <img
            src="/assets/images/avatar.jpg"
            className={styles.avatar}
            alt="User avatar"
          />
        </div>
      </div>
      <section className={styles.user}>
        <div className={styles.details}>
          <h3 className={styles.title}>
            <span className={styles.name}>firstname</span>
            <span className={styles.name}>lastname</span>
          </h3>
          <ul className={styles.info}>
            <li className={styles.item}>
              <p className={styles.username}>username</p>
            </li>
            <li className={styles.item}>
              <p className={styles.username}>followers</p>
            </li>
          </ul>
          <section className={styles.actions}>
            <div className={styles.action}>
              <button className={styles.follow}>Follow</button>
            </div>
            <div className={styles.action}>
              <button className={styles.share}>Share</button>
            </div>
          </section>
        </div>
      </section>
      <section className={styles.featured}>
        <ul className={styles.options}>
          <li className={styles.option}>
            <button className={styles.show}>Content</button>
          </li>
          <li className={styles.option}>
            <button className={styles.show}>About</button>
          </li>
        </ul>
        <article className={styles.content}>
          <UserPosts></UserPosts>
        </article>
      </section>
    </main>
  )
}

export default Profile
