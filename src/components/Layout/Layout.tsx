import styles from "./Layout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import Main from "../Main"
import RightSidebar from "../RightSidebar"
import Footer from "../Footer"

function Layout() {
  return (
    <section className={styles.grid}>
      <Header />
      <LeftSidebar />
      <Main />
      <RightSidebar />
      <Footer />
    </section>
  )
}

export default Layout
