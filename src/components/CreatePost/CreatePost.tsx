import styles from "./CreatePost.module.css"
import useUser from "../../hooks/useUser"
import Loading from "../Loading"
import { createPost } from "../../services/posts"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

interface Post {
  body: string
  authorId: string
}

function CreatePost() {
  const [text, setText] = useState<string>("")
  const { user } = useUser()

  const { mutate, isPending } = useMutation({
    mutationFn: (newPost: Post) => createPost(newPost),
  })

  const onCreatePost = (event: React.SubmitEvent<HTMLElement>) => {
    event.preventDefault()
    if (!user) return

    const newPost: Post = {
      body: text,
      authorId: user.id,
    }
    mutate(newPost)
    setText("")
  }

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextText = event.target.value
    setText(nextText)
  }

  if (!user || isPending) return <Loading />

  return (
    <section className={styles.wrapper}>
      <figure className={styles.box}>
        <div className={styles.container}>
          <img src={user.profile.avatar} alt="User avatar" />
        </div>
      </figure>
      <form onSubmit={onCreatePost} className={styles.form}>
        <div className={styles.group}>
          <input
            onChange={onTextChange}
            type="text"
            className={styles.field}
            placeholder="What's new?"
          ></input>
        </div>
        <div className={styles.group}>
          <button className={styles.post}>Post</button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost
