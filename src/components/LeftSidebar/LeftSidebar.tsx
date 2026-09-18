import styles from "./LeftSidebar.module.css"
import { Link } from "react-router"

function LeftSidebar() {
  return (
    <aside className={styles.aside}>
      <nav className={styles.navigation}>
        <ul className={styles.options}>
          <li className={styles.option}>
            <Link className={styles.link} to="/">
              For You
            </Link>
          </li>
          <li className={styles.option}>
            <Link className={styles.link} to="/">
              New Thread
            </Link>
          </li>
          <li className={styles.option}>
            <Link className={styles.link} to="/">
              Search
            </Link>
          </li>
        </ul>
        <ul className={styles.actions}>
          <li className={styles.action}>
            <Link className={styles.link} to="/">
              Messages
            </Link>
          </li>
          <li className={styles.action}>
            <Link className={styles.link} to="/">
              Activity
            </Link>
          </li>
          <li className={styles.action}>
            <Link className={styles.link} to="/">
              Profile
            </Link>
          </li>
          <li className={styles.action}>
            <Link className={styles.link} to="/">
              Insights
            </Link>
          </li>
          <li className={styles.action}>
            <Link className={styles.link} to="/">
              Saved
            </Link>
          </li>
        </ul>
        <ul className={styles.picks}>
          <li className={styles.pick}>
            <Link className={styles.link} to="/">
              Feeds
            </Link>
          </li>
          <li className={styles.pick}>
            <Link className={styles.link} to="/">
              Following
            </Link>
          </li>
          <li className={styles.pick}>
            <Link className={styles.link} to="/">
              Ghost Posts
            </Link>
          </li>
        </ul>
      </nav>
      <article className={styles.more}>
        <Link to="/" className={styles.link}>
          More
        </Link>
      </article>
    </aside>
  )
}

export default LeftSidebar
