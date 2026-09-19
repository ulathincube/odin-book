import styles from "./LeftSidebar.module.css"
import { Link } from "react-router"
import ListOptionWithIcon from "../ListOptionWithIcon"
import { useState, useEffect } from "react"
import NewThread from "../NewThread"

function LeftSidebar() {
  const [createThread, setCreateThread] = useState<boolean>(false)

  useEffect(() => {
    const newThreadElement: HTMLElement = document.querySelector("#new-thread")!
    const bodyElement = document.body

    if (createThread) {
      newThreadElement.style.visibility = "visible"
      bodyElement.style.overflowY = "hidden"
    }

    return () => {
      newThreadElement.style.visibility = "hidden"
      bodyElement.style.overflowY = "visible"
    }
  }, [createThread])

  function onCreateThread() {
    setCreateThread(true)
  }

  return (
    <aside className={styles.aside}>
      <nav className={styles.navigation}>
        <ul className={styles.options}>
          <ListOptionWithIcon
            content={
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
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            }
          >
            For You
          </ListOptionWithIcon>
          <ListOptionWithIcon
            onButtonClick={onCreateThread}
            content={
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
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            }
          >
            New Thread
          </ListOptionWithIcon>
          <ListOptionWithIcon
            content={
              <svg
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
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            }
          >
            Search
          </ListOptionWithIcon>
        </ul>
        <ul className={styles.actions}>
          <ListOptionWithIcon
            content={
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
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            }
          >
            Messages
          </ListOptionWithIcon>
          <ListOptionWithIcon
            content={
              <svg
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
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            }
          >
            Activity
          </ListOptionWithIcon>
          <ListOptionWithIcon
            content={
              <svg
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            }
          >
            Profile
          </ListOptionWithIcon>
          <ListOptionWithIcon
            content={
              <svg
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
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            }
          >
            Insights
          </ListOptionWithIcon>
          <ListOptionWithIcon
            content={
              <svg
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
                <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path>
                <polyline points="8 10 12 14 16 10"></polyline>
              </svg>
            }
          >
            Saved
          </ListOptionWithIcon>
        </ul>
        <ul className={styles.picks}>
          <li className={styles.pick}>
            <Link className={`${styles.link} ${styles.alt}`} to="/">
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
        <ListOptionWithIcon
          content={
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
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          }
        >
          More
        </ListOptionWithIcon>
      </article>
      {createThread && <NewThread />}
    </aside>
  )
}

export default LeftSidebar
