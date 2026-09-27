import styles from "./Header.module.css"
import Logo from "../Logo"

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo />
    </header>
  )
}

export default Header
