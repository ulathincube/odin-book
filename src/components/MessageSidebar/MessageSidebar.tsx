import styles from "./MessageSidebar.module.css"
import SearchUser from "../SearchUser"
import MessageUser from "../MessageUser"
import { useQuery } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

interface User {
  id: string
  created: string
  _count: {
    followedBy: number
    following: number
  }
  username: string
  fullname: string
  profile: {
    id: string
    status: string
    avatar: string
    birthday: string
    location: string
  }
}

function MessageSidebar() {
  const queryClient = useQueryClient()
  const userQueryData:
    | { data: User[]; error: string; message: string }
    | undefined = queryClient.getQueryData(["allUsers"])

  const [activeId, setActiveId] = useState<string>("")

  const onChangeActiveId = (newActiveId: string) => {
    setActiveId(newActiveId)
  }

  if (!userQueryData) return

  return (
    <aside className={styles.wrapper}>
      <SearchUser />
      <article className={styles.users}>
        {userQueryData.data.map((userObject) => (
          <MessageUser
            id={userObject.id}
            activeId={activeId}
            onChangeActiveId={onChangeActiveId}
            key={userObject.id}
            fullname={userObject.fullname}
            avatar={userObject.profile.avatar}
          />
        ))}
      </article>
    </aside>
  )
}

export default MessageSidebar
