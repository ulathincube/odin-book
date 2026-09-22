import styles from "./ProfileLayout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import Profile from "../Profile"

function ProfileLayout() {
  return (
    <section className={styles.grid}>
      <Header />
      <LeftSidebar />
      <Profile />
    </section>
  )
}

export default ProfileLayout
