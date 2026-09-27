import styles from "./ListOptionWithIcon.module.css"
import { Link } from "react-router"

interface Props extends React.PropsWithChildren {
  content: React.ReactNode
  onButtonClick?: () => void
  href?: string
}

function ListOptionWithIcon({
  children,
  content,
  onButtonClick,
  href = "/",
}: Props) {
  let component
  if (onButtonClick) {
    component = (
      <button
        className={`${styles.link} ${styles.button}`}
        onClick={onButtonClick}
      >
        <span className={styles.wrapper}>{content}</span>
        <span className={styles.text}>{children}</span>
      </button>
    )
  } else {
    component = (
      <Link to={href} className={styles.link}>
        <span className={styles.wrapper}>{content}</span>
        <span className={styles.text}>{children}</span>
      </Link>
    )
  }

  return <li className={styles.option}>{component}</li>
}

export default ListOptionWithIcon
