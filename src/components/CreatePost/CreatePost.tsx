import styles from "./CreatePost.module.css"

function CreatePost() {
  return (
    <section className={styles.wrapper}>
      <figure className={styles.box}>
        <div className={styles.container}>
          <img src="/assets/images/avatar.jpg" alt="User avatar" />
        </div>
      </figure>
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            type="text"
            className={styles.field}
            placeholder="What's new?"
          ></input>
        </div>
        <div className={styles.group}>
          <button className={styles.post}>Post</button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost
