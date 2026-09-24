import styles from "./RightSidebar.module.css"
import PopularUsers from "../PopularUsers"
import PopularUser from "../PopularUser"
import { getAllUsers } from "../../services/users"
import { useQuery } from "@tanstack/react-query"
import Loading from "../Loading"

function RightSidebar() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  })

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <aside className={styles.aside}>
      <PopularUsers>
        {data.data.map(({ id, username, profile: { status, avatar } }) => (
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
