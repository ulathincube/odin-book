import styles from "./PostDetailLayout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import RightSidebar from "../RightSidebar"
import SelectedPost from "../SelectedPost"
import { useParams } from "react-router"
import { useQueryClient } from "@tanstack/react-query"
import { motion } from "motion/react"

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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.grid}
    >
      <Header />
      <LeftSidebar />
      {postId && <SelectedPost postId={postId} />}
      <RightSidebar users={users.data} />
    </motion.section>
  )
}

export default PostDetailLayout
