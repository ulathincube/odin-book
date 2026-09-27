import styles from "./CommentBox.module.css"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { createComment } from "../../services/comment"
import useUser from "../../hooks/useUser"
import Loading from "../Loading"
import { useParams } from "react-router"

interface CreateComment {
  body: string
  postId: string
  authorId: string
}

function CommentBox() {
  const [comment, setComment] = useState<string>("")

  const { user } = useUser()
  const { postId } = useParams()

  const { isPending, isError, error, mutate } = useMutation({
    mutationFn: ({ body, postId, authorId }: CreateComment) =>
      createComment({ body, postId, authorId }),
  })

  const onFormSubmit = (event: React.SubmitEvent) => {
    event.preventDefault()
    mutate({ body: comment, postId: postId!, authorId: user!.id })
  }

  const onChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  if (!user || isPending) return <Loading />
  if (isError) return <div>{error.message}</div>

  return (
    <section className={styles.wrapper}>
      <form onSubmit={onFormSubmit} className={styles.form}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="comment">
            Comment
          </label>
          <textarea
            value={comment}
            onChange={onChangeComment}
            placeholder="Reply"
            id="comment"
            className={styles.field}
          />
        </div>
        <div className={styles.group}>
          <span className={styles.box}>
            <button className={styles.submit}>Comment</button>
          </span>
        </div>
      </form>
    </section>
  )
}

export default CommentBox
