import styles from "./PostDetailLayout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import RightSidebar from "../RightSidebar"
import SelectedPost from "../SelectedPost"
import { useParams } from "react-router"

function PostDetailLayout() {
  const { postId } = useParams()
  return (
    <section className={styles.grid}>
      <Header />
      <LeftSidebar />
      {postId && <SelectedPost postId={postId} />}
      <RightSidebar />
    </section>
  )
}

export default PostDetailLayout
