import styles from "./Logo.module.css"
import { Link } from "react-router"

function Logo() {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.logo} to="/">
        Socket-Social
      </Link>
    </div>
  )
}

export default Logo
