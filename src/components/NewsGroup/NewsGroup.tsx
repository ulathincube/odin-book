import styles from "./NewsGroup.module.css"

function NewsGroup({ children }: React.PropsWithChildren) {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Today's News</h3>
      <ul className={styles.news}>{children}</ul>
    </section>
  )
}

export default NewsGroup
