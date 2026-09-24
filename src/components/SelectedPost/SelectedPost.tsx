import styles from "./SelectedPost.module.css"
import Comment from "../Comment"
import CommentBox from "../CommentBox"
import { getPostById } from "../../services/posts"
import { useQuery } from "@tanstack/react-query"
import Loading from "../Loading"
import { getTimeDifference } from "../../utils/luxon"
import { useState } from "react"

interface Props {
  postId: string
}

function SelectedPost({ postId }: Props) {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["getPost", postId],
    queryFn: () => getPostById(postId),
  })

  const [liked, setLiked] = useState<boolean>(false)

  const onToggleLike = () => setLiked(!liked)

  if (isPending) return <Loading />
  if (isError) return <div>{error.message}</div>

  let timeDuration: string | null = null
  const { months, weeks, days, hours, minutes, seconds } = getTimeDifference(
    data.data.created,
  )

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
  if (weeks) {
    timeDuration = `${weeks}w`
  }
  if (months) {
    timeDuration = `${months}mon`
  }

  return (
    <main className={styles.main}>
      <div className={styles.context}>
        <section className={styles.details}>
          <article className={styles.user}>
            <div className={styles.box}>
              <img
                src={data.data.author.profile.avatar}
                className={styles.avatar}
                alt="User avatar"
              />
            </div>
            <p className={styles.name}>{data.data.author.fullname}</p>
          </article>
          <div className={styles.other}>
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
          </div>
        </section>
        <section className={styles.post}>
          <p className={styles.text}>{data.data.body}</p>
          <div className={styles.reactions}>
            <div className={styles.actions}>
              <button onClick={onToggleLike} className={styles.action}>
                <span className={styles.wrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={liked ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.icon}
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </span>
                <span className={styles.count}>
                  {liked ? data.data.likes + 1 : data.data.likes}
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
            </div>
            <div className={styles.elapsed}>
              <p className={styles.time}>{timeDuration}</p>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.comments}>
        <ul className={styles.list}>
          {data.data.comments.map((commentObject) => (
            <Comment key={commentObject.id} />
          ))}
        </ul>
        <CommentBox />
      </div>
    </main>
  )
}

export default SelectedPost
