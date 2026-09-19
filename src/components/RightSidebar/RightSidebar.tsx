import styles from "./RightSidebar.module.css"
import News from "../News"
import NewsGroup from "../NewsGroup"
import PopularUsers from "../PopularUsers"
import PopularUser from "../PopularUser"
import { getAllUsers } from "../../services/users"
import { useQuery } from "@tanstack/react-query"

function RightSidebar() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  })

  if (isPending) {
    return <div>...Loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <aside className={styles.aside}>
      <NewsGroup>
        <News />
        <News />
      </NewsGroup>
      <PopularUsers>
        {data.data.map(({ id, username, profile: { status, avatar } }) => (
          <PopularUser
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
