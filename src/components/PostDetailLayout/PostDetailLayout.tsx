import styles from "./PostDetailLayout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import RightSidebar from "../RightSidebar"
import SelectedPost from "../SelectedPost"
import { useParams } from "react-router"
import { useQueryClient } from "@tanstack/react-query"

interface User {
  id: string
  created: string
  username: string
  fullname: string
  profile: {
    id: string
    status: string
    avatar: string
    birthday: string
    location: string
  }
  _count: {
    followedBy: number
    following: number
  }
}

function PostDetailLayout() {
  const queryClient = useQueryClient()
  const { postId } = useParams()

  const users: { data: User[] } | undefined = queryClient.getQueryData([
    "allUsers",
  ])!

  if (!users) return

  return (
    <section className={styles.grid}>
      <Header />
      <LeftSidebar />
      {postId && <SelectedPost postId={postId} />}
      <RightSidebar users={users.data} />
    </section>
  )
}

export default PostDetailLayout
