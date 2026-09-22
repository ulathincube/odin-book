import styles from "./CommentBox.module.css"

function CommentBox() {
  const onFormSubmit = (event: React.SubmitEvent) => {
    event.preventDefault()
  }

  return (
    <section className={styles.wrapper}>
      <form onSubmit={onFormSubmit} className={styles.form}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="comment">
            Comment
          </label>
          <textarea placeholder="Reply" id="comment" className={styles.field} />
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
