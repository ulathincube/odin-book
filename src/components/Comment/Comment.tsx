import styles from "./Comment.module.css"

function Comment() {
  return (
    <li className={styles.comment}>
      <section className={styles.details}>
        <div className={styles.user}>
          <div className={styles.box}>
            <img src="/assets/images/avatar.jpg" className={styles.avatar} />
          </div>
        </div>
      </section>
      <div className={styles.name}>
        <p className={styles.usernname}>FullName</p>
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
      </div>
      <section className={styles.text}>
        <p className={styles.written}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa
          itaque placeat sequi, nobis ab eum aut saepe velit aliquid explicabo
          doloremque magni fuga, quam nemo fugiat, impedit similique vitae.
        </p>
        <div className={styles.reactions}>
          <div className={styles.container}>
            <button className={styles.action}>
              <span className={styles.wrapper}>
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
                  className={styles.icon}
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </span>
              <span className={styles.count}>0</span>
            </button>
          </div>
          <div className={styles.elapsed}>
            <p className={styles.time}>1 month ago</p>
          </div>
        </div>
      </section>
    </li>
  )
}

export default Comment
