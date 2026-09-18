import styles from "./UserPost.module.css"

function UserPost() {
  return (
    <li className={styles.post}>
      <div className={styles.container}>
        <figure className={styles.box}>
          <div className={styles.parent}>
            <img
              src="/assets/images/avatar.jpg"
              className={styles.image}
              alt="User avatar"
            />
            <button className={styles.follow}>+</button>
          </div>
        </figure>
        <section className={styles.details}>
          <div className={styles.user}>
            <p className={styles.username}>username</p>
            <span className={styles.checkmark}>checkmark</span>
            <span className={styles.time}>7h</span>
            <div className={styles.more}>
              <button className={styles.info}>...</button>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa
            deleniti quidem a, ducimus laudantium, dolor dolorem itaque eum
            explicabo facilis necessitatibus sed, saepe at recusandae repellat
            reiciendis porro. Quasi eveniet dolores aut adipisci eaque velit,
            consectetur consequatur officiis reprehenderit, culpa alias
            excepturi maiores facere suscipit, animi qui voluptatum provident.
          </div>
          <div className={styles.actions}>
            <button className={styles.action}>Like</button>
            <button className={styles.action}>Comment</button>
            <button className={styles.action}>Share</button>
            <button className={styles.action}>Forward</button>
          </div>
        </section>
      </div>
    </li>
  )
}

export default UserPost
