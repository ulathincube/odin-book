import styles from "./UserPosts.module.css"

function UserPosts({ children }: React.PropsWithChildren) {
  return (
    <section className={styles.posts}>
      <ul className={styles.list}>{children}</ul>
    </section>
  )
}

export default UserPosts
