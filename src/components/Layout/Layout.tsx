import styles from "./Layout.module.css"
import Header from "../Header"
import LeftSidebar from "../LeftSidebar"
import Footer from "../Footer"
import MainPlusSidebar from "../MainPlusSidebar"

function Layout() {
  return (
    <section className={styles.grid}>
      <Header />
      <LeftSidebar />
      <MainPlusSidebar />
      <Footer />
    </section>
  )
}

export default Layout
