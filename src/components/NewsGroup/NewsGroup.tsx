import styles from "./NewsGroup.module.css"

function NewsGroup({ children }: React.PropsWithChildren) {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.news}>{children}</ul>
    </section>
  )
}

export default NewsGroup
