import styles from "./Main.module.css"
import CreatePost from "../CreatePost"
import UserPosts from "../UserPosts/UserPosts"
import UserPost from "../UserPost"

interface Comment {
  body: string
  id: string
  created: string
  likes: number
  author: {
    fullname: string
    username: string
    profile: {
      avatar: string
    }
  }
}

interface Post {
  body: string
  id: string
  created: string
  likes: number
  author: {
    fullname: string
    username: string
    profile: {
      avatar: string
    }
  }
  comments: Comment[]
  _count?: {
    comments: number
  }
}

interface Props {
  posts: Post[]
}

function Main({ posts }: Props) {
  return (
    <main className={styles.main}>
      <CreatePost />
      <UserPosts>
        {posts.map(
          ({
            id,
            created,
            likes,
            author: {
              username,
              profile: { avatar },
            },
            body,
            _count,
          }) => (
            <UserPost
              id={id}
              likes={likes}
              created={created}
              key={id}
              avatar={avatar}
              username={username}
              body={body}
              commentCount={_count!.comments}
            />
          ),
        )}
      </UserPosts>
    </main>
  )
}

export default Main
