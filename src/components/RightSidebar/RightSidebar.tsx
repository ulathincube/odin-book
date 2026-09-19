import styles from "./RightSidebar.module.css"
import News from "../News"
import NewsGroup from "../NewsGroup"
import PopularUsers from "../PopularUsers"
import PopularUser from "../PopularUser"

function RightSidebar() {
  return (
    <aside className={styles.aside}>
      <NewsGroup>
        <News />
        <News />
      </NewsGroup>
      <PopularUsers>
        <PopularUser />
        <PopularUser />
      </PopularUsers>
    </aside>
  )
}

export default RightSidebar
