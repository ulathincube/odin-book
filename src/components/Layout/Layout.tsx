import styles from "./Layout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import Footer from "../Footer"
import MainPlusSidebar from "../MainPlusSidebar"
import { motion } from "motion/react"

function Layout() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.grid}
    >
      <Header />
      <LeftSidebar />
      <MainPlusSidebar />
      <Footer />
    </motion.section>
  )
}

export default Layout
