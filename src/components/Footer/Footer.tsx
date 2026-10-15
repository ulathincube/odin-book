import styles from "./Footer.module.css"
import Logo from "../Logo"

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Logo />
    </footer>
  )
}

export default Footer
