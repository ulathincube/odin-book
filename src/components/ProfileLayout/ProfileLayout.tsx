import styles from "./ProfileLayout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import Profile from "../Profile"
import { useParams } from "react-router"

function ProfileLayout() {
  const { userId } = useParams()

  return (
    <section className={styles.grid}>
      <Header />
      <LeftSidebar />
      {userId && <Profile userId={userId} />}
    </section>
  )
}

export default ProfileLayout
