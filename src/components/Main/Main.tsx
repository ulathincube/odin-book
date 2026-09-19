import styles from "./Main.module.css"
import CreatePost from "../CreatePost"
import UserPosts from "../UserPosts/UserPosts"
import UserPost from "../UserPost"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "../../services/posts"

function Main() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["allPosts"],
    queryFn: getAllPosts,
    retry: 1,
  })

  if (isPending) {
    return <div>....Loading....</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <main className={styles.main}>
      <CreatePost />
      <UserPosts>
        {data.data.map(
          ({
            id,

            author: {
              username,
              profile: { avatar },
            },
            body,
          }) => (
            <UserPost
              key={id}
              avatar={avatar}
              username={username}
              body={body}
            />
          ),
        )}
      </UserPosts>
    </main>
  )
}

export default Main
