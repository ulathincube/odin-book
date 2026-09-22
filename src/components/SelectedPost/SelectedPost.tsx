import styles from "./SelectedPost.module.css"

function SelectedPost() {
  return (
    <main className={styles.main}>
      <section className={styles.details}>
        <div className={styles.box}>
          <img src="/assets/images/avatar.jpg" className={styles.avatar} />{" "}
        </div>
        <p className={styles.name}>FullName</p>
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
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          voluptatum facilis provident nobis autem, eum accusamus libero qui,
          est praesentium aspernatur quae harum nihil obcaecati.
        </p>
        <div className={styles.reactions}>
          <div className={styles.actions}>
            <button className={styles.action}>
              <span className={styles.wrapper}></span>
              <span className={styles.count}>0</span>
            </button>
            <button className={styles.action}>
              <span className={styles.wrapper}></span>
              <span className={styles.count}>0</span>
            </button>
          </div>
          <div className={styles.elapsed}>
            <p className={styles.time}>1 month ago</p>
          </div>
        </div>
        <div className={styles.comments}>
          <ul className={styles.list}></ul>
        </div>
      </section>
    </main>
  )
}

export default SelectedPost
