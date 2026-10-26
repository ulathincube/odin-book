import styles from "./AvatarContext.module.css"
import useUser from "../../hooks/useUser"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router"
import { useEffect, useRef } from "react"

interface Props {
  onHideContext: () => void
  showContext: boolean
}

function AvatarContext({ onHideContext, showContext }: Props) {
  const { user, onChangeUser } = useUser()
  const { onChangeToken } = useAuth()
  const navigate = useNavigate()
  const contextParentRef = useRef<null | HTMLElement>(null)

  useEffect(() => {}, [])

  const onLogOutUser = () => {
    onChangeToken("")
    onChangeUser(null)
    onHideContext()
    navigate("/login")
  }

  const onNavigateToLogin = () => {
    navigate("/login")
  }

  const onClickContext = (event: React.MouseEvent) => {
    if (showContext && event.target !== contextParentRef.current) {
      onHideContext()
    } else if (showContext && event.target === contextParentRef.current) {
      console.log({ ctx: contextParentRef.current, target: event.target })
    }
  }

  return (
    <article
      ref={contextParentRef}
      className={styles.wrapper}
      onClick={onClickContext}
    >
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
