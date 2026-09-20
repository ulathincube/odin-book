import { createPortal } from "react-dom"
import styles from "./NewThread.module.css"
import useUser from "../../hooks/useUser"
import { createPost } from "../../services/posts"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import Loading from "../Loading"

interface Post {
  body: string
  authorId: string
}

const container: HTMLElement = document.querySelector("#new-thread")!

type Props = {
  onHideCreateThread: () => void
}

function NewThread({ onHideCreateThread }: Props) {
  const [text, setText] = useState<string>("")
  const { user } = useUser()
  const { mutate, isPending } = useMutation({
    mutationFn: (newPost: Post) => createPost(newPost),
  })

  const onCreatePost = (event: React.SubmitEvent<HTMLElement>) => {
    event.preventDefault()
    if (!user) return

    const newPost: Post = {
      body: text,
      authorId: user.id,
    }
    mutate(newPost)
    setText("")
    onHideCreateThread()
  }

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextText = event.target.value
    setText(nextText)
  }

  if (!user || isPending) return <Loading />

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <section className={styles.thread}>
            <article className={styles.actions}>
              <button
                type="button"
                onClick={onHideCreateThread}
                className={styles.cancel}
              >
                Cancel
              </button>
              <h3 className={styles.title}>New Thread</h3>
              <div className={styles.options}>
                <button type="button" className={styles.option}>
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
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                      <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                  </span>
                </button>
                <button type="button" className={styles.option}>
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
            </article>
          </section>
          <section className={styles.details}>
            <figure className={styles.info}>
              <div className={styles.box}>
                <img src={user.profile.avatar} alt="User avatar" />
              </div>
              <div className={styles.user}>
                <span className={styles.username}>{user.username}</span>
                <span className={styles.wrapper}>
                  <svg
                    className={`${styles.icon} ${styles.alt}`}
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
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span className={styles.topic}>Music Topic</span>
              </div>
            </figure>
            <form onSubmit={onCreatePost} className={styles.form}>
              <div className={styles.group}>
                <textarea
                  onChange={onTextChange}
                  className={styles.field}
                  placeholder="Add to Thread"
                ></textarea>
              </div>
              <div className={`${styles.group} ${styles.alt}`}>
                <button type="submit" className={styles.post}>
                  Post
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>,
    container,
  )
}

export default NewThread
