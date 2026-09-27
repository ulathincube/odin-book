import styles from "./CommentBox.module.css"
import { useState } from "react"

function CommentBox() {
  const [comment, setComment] = useState<string>("")

  const onFormSubmit = (event: React.SubmitEvent) => {
    event.preventDefault()
  }

  const onChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

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
