import styles from "./Main.module.css"
import CreatePost from "../CreatePost"
import UserPosts from "../UserPosts/UserPosts"
import UserPost from "../UserPost"

function Main() {
  return (
    <main className={styles.main}>
      <CreatePost />
      <UserPosts>
        <UserPost />
        <UserPost />
      </UserPosts>
    </main>
  )
}

export default Main
