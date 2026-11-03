import styles from "./ProfileLayout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import Profile from "../Profile"
import { useParams } from "react-router"
import { motion } from "motion/react"

function ProfileLayout() {
  const { userId } = useParams()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.grid}
    >
      <Header />
      <LeftSidebar />
      {userId && <Profile userId={userId} />}
    </motion.section>
  )
}

export default ProfileLayout
