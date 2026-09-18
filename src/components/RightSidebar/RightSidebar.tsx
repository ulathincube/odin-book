import styles from "./RightSidebar.module.css"
import News from "../News"
import NewsGroup from "../NewsGroup"

function RightSidebar() {
  return (
    <aside className={styles.aside}>
      <h3 className={styles.title}>Today's News</h3>
      <NewsGroup>
        <News />
        <News />
      </NewsGroup>
    </aside>
  )
}

export default RightSidebar
