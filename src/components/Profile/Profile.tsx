import styles from "./Profile.module.css"
import { Link } from "react-router"
import UserPosts from "../UserPosts"
import UserPost from "../UserPost"
import { useQuery } from "@tanstack/react-query"
import { getAllUserData } from "../../services/users"
import Loading from "../Loading"

interface Props {
  userId: string
}

function Profile({ userId }: Props) {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["getUserData", userId],
    queryFn: () => getAllUserData(userId),
  })

  if (isPending) return <Loading />

  if (isError) return <div>{error.message}</div>

  return (
    <main className={styles.main}>
      <div className={styles.wallpaper}>
        <img
          src="/assets/images/mountains.webp"
          className={styles.background}
          alt="Background image"
        />
        <div className={styles.box}>
          <img
            src={data.data.profile.avatar}
            className={styles.avatar}
            alt="User avatar"
          />
        </div>
      </div>
      <section className={styles.user}>
        <div className={styles.details}>
          <h3 className={styles.title}>
            <span className={styles.name}>{data.data.fullname}</span>
          </h3>
          <ul className={styles.info}>
            <li className={styles.item}>
              <p className={styles.username}>{data.data.username}</p>
            </li>
            <li className={styles.item}>
              <p className={styles.follows}>
                <span className={styles.count}>
                  {data.data._count.followedBy}
                </span>
                <span className={styles.followers}>
                  {data.data._count.followedBy === 1 ? "Follower" : "Followers"}
                </span>
              </p>
            </li>
          </ul>
          <section className={styles.actions}>
            <div className={styles.action}>
              <button className={styles.follow}>Follow</button>
            </div>
            <div className={styles.action}>
              <button className={styles.share}>Share</button>
            </div>
          </section>
        </div>
      </section>
      <section className={styles.featured}>
        <ul className={styles.options}>
          <li className={styles.option}>
            <button className={styles.show}>Content</button>
          </li>
          <li className={styles.option}>
            <button className={styles.show}>About</button>
          </li>
        </ul>
        <article className={styles.content}>
          <UserPosts>
            {data.data.posts.map((postObject) => (
              <UserPost
                id={postObject.id}
                likes={postObject.likes}
                roundFirstChild={true}
                key={postObject.id}
                avatar={data.data.profile.avatar}
                body={postObject.body}
                created={postObject.created}
                username={data.data.username}
              />
            ))}
          </UserPosts>
        </article>
      </section>
    </main>
  )
}

export default Profile
