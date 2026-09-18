import styles from "./News.module.css"

function News() {
  return (
    <li className={styles.item}>
      <h2 className={styles.title}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
        dolorum.
      </h2>
      <div className={styles.details}>
        <div className={styles.sources}>
          <span className={styles.source}>
            <img src="/assets/images/avatar.jpg" alt="Source" />
          </span>
          <span className={styles.source}>
            <img src="/assets/images/avatar.jpg" alt="Source" />
          </span>
          <span className={styles.source}>
            <img src="/assets/images/avatar.jpg" alt="Source" />
          </span>
        </div>
        <div className={styles.details}>
          <span className={styles.time}>7 hours ago</span>
          <span className={styles.genre}>News</span>
          <span className={styles.posts}>15.7K posts</span>
        </div>
      </div>
    </li>
  )
}

export default News
