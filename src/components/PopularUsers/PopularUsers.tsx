import styles from "./PopularUsers.module.css"

function PopularUsers({ children }: React.PropsWithChildren) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Popular Users</h2>
      <ul className={styles.users}>{children}</ul>
    </section>
  )
}

export default PopularUsers
