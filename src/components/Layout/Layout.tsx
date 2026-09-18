import styles from "./Layout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import Main from "../Main"
import RightSidebar from "../RightSidebar"

function Layout() {
  return (
    <section className={styles.grid}>
      <Header />
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </section>
  )
}

export default Layout
