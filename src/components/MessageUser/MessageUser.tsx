import styles from "./MessageUser.module.css"

interface Props {
  id: string
  fullname: string
  avatar: string
  activeId: string
  onChangeActiveId: (activeId: string) => void
}

function MessageUser({
  id,
  fullname,
  avatar,
  activeId,
  onChangeActiveId,
}: Props) {
  const onButtonClick = () => {
    onChangeActiveId(id)
  }

  return (
    <article className={styles.wrapper}>
      <button
        onClick={onButtonClick}
        className={`${styles.container} ${id === activeId ? styles.active : undefined}`}
      >
        <div className={styles.box}>
          <img className={styles.avatar} src={avatar} alt={fullname} />
        </div>
        <div className={styles.details}>
          <span className={styles.name}>{fullname}</span>
          <span className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            iste!
          </span>
        </div>
      </button>
    </article>
  )
}

export default MessageUser
