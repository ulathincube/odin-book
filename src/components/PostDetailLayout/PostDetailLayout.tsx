import styles from "./PostDetailLayout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import RightSidebar from "../RightSidebar"
import SelectedPost from "../SelectedPost"

function PostDetailLayout() {
  return (
    <section className={styles.grid}>
      <Header />
      <LeftSidebar />
      <SelectedPost />
      <RightSidebar />
    </section>
  )
}

export default PostDetailLayout
