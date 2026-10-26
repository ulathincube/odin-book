import styles from "./AvatarContext.module.css"
import useUser from "../../hooks/useUser"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router"

interface Props {
  onHideContext: () => void
}

function AvatarContext({ onHideContext }: Props) {
  const { user, onChangeUser } = useUser()
  const { onChangeToken } = useAuth()
  const navigate = useNavigate()

  const onLogOutUser = () => {
    onChangeToken("")
    onChangeUser(null)
    onHideContext()
    navigate("/login")
  }

  const onNavigateToLogin = () => {
    navigate("/login")
  }

  return (
    <article className={styles.wrapper}>
      <button onClick={onNavigateToLogin} className={styles.action}>
        Add Another Account
      </button>
      <button onClick={onLogOutUser} className={styles.action}>
        <span className={styles.text}>Log Out</span>
        <span className={styles.username}>@{user!.username}</span>
      </button>
    </article>
  )
}

export default AvatarContext
