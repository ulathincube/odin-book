import styles from "./UserPost.module.css"
import { getTimeDifference } from "../../utils/luxon"
import { useState } from "react"
import { likePost } from "../../services/posts"
import { useMutation } from "@tanstack/react-query"
import Loading from "../Loading"
import { Link } from "react-router"

interface Props {
  id: string
  avatar: string
  username: string
  body: string
  created: string
  likes: number
  roundFirstChild?: boolean
}

function UserPost({
  id,
  avatar,
  username,
  body,
  created,
  likes,
  roundFirstChild = false,
}: Props) {
  const [isLike, setIsLike] = useState<boolean>(false)

  const { isPending, mutate, isError, error } = useMutation({
    mutationFn: ({ postId, likes }: { postId: string; likes: number }) =>
      likePost({ postId, likes }),
  })

  const onClickLike = () => {
    let likesCount
    const nextState = !isLike
    setIsLike(nextState)

    if (nextState) {
      likesCount = likes + 1
    } else {
      likesCount = likes
    }
    mutate({ postId: id, likes: likesCount })
  }

  let timeDuration: string | null = null
  const { days, hours, minutes, seconds } = getTimeDifference(created)

  if (seconds) {
    timeDuration = `${seconds}s`
  }
  if (minutes) {
    timeDuration = `${minutes}m`
  }
  if (hours) {
    timeDuration = `${hours}h`
  }
  if (days) {
    timeDuration = `${days}d`
  }

  if (isPending) return <Loading />

  if (isError) return <div>{error.message}</div>

  return (
    <li
      className={styles.post}
      style={
        roundFirstChild
          ? ({
              "--round-me": "var(--border-radius-top)",
              "--border-me": "1px solid var(--gray)",
            } as React.CSSProperties)
          : {}
      }
    >
      <Link to={`/posts/${id}`} className={styles.link}>
        <div className={styles.container}>
          <figure className={styles.box}>
            <div className={styles.parent}>
              <img src={avatar} className={styles.image} alt="User avatar" />
              <button className={styles.follow}>+</button>
            </div>
          </figure>
          <section className={styles.details}>
            <div className={styles.user}>
              <p className={styles.username}>{username}</p>
              <span className={styles.checkmark}>
                <svg
                  className={styles.check}
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
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className={styles.time}>{timeDuration}</span>
              <div className={styles.more}>
                <button className={styles.info}>
                  <span className={styles.wrapper}>
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
                  </span>
                </button>
              </div>
            </div>
            <div className={styles.content}>{body}</div>
            <div className={styles.actions}>
              <button onClick={onClickLike} className={styles.action}>
                <span className={styles.wrapper}>
                  <svg
                    className={styles.icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isLike ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </span>
                <span className={styles.count}>
                  {isLike ? likes + 1 : likes}
                </span>
              </button>
              <button className={styles.action}>
                <span className={styles.wrapper}>
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
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </span>
                <span className={styles.count}>0</span>
              </button>
              <button className={styles.action}>
                <span className={styles.wrapper}>
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
                    <polyline points="1 4 1 10 7 10"></polyline>
                    <polyline points="23 20 23 14 17 14"></polyline>
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                  </svg>
                </span>
                <span className={styles.count}>0</span>
              </button>
              <button className={styles.action}>
                <span className={styles.wrapper}>
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
                </span>
                <span className={styles.count}>0</span>
              </button>
            </div>
          </section>
        </div>
      </Link>
    </li>
  )
}

export default UserPost
