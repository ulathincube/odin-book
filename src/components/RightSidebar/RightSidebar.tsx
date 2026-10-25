import styles from "./RightSidebar.module.css"
import PopularUsers from "../PopularUsers"
import PopularUser from "../PopularUser"

interface User {
  id: string
  created: string
  username: string
  profile: {
    id: string
    status: string
    avatar: string
    birthday: string
    location: string
  }
  _count: {
    followedBy: number
    following: number
  }
}

interface Props {
  users: User[]
}

function RightSidebar({ users }: Props) {
  return (
    <aside className={styles.aside}>
      <PopularUsers>
        {users.map(({ id, username, profile: { status, avatar } }) => (
          <PopularUser
            id={id}
            key={id}
            username={username}
            bio={status}
            avatar={avatar}
          />
        ))}
      </PopularUsers>
    </aside>
  )
}

export default RightSidebar
