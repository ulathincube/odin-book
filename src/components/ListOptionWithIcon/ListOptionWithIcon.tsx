import styles from "./ListOptionWithIcon.module.css"
import { Link } from "react-router"

interface Props extends React.PropsWithChildren {
  content: React.ReactNode
}

function ListOptionWithIcon({ children, content }: Props) {
  return (
    <li className={styles.option}>
      <Link className={styles.link} to="/">
        <span className={styles.wrapper}>{content}</span>
        <span className={styles.text}>{children}</span>
      </Link>
    </li>
  )
}

export default ListOptionWithIcon
