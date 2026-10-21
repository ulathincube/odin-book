import styles from "./Register.module.css"
import { Link } from "react-router"
import { createUser } from "../../services/users"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import Loading from "../../components/Loading"

function Register() {
  const [fullname, setFullname] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const registerMutation = useMutation({
    mutationFn: () =>
      createUser({
        fullname,
        username,
        email,
        password,
      }),
    onSuccess: () => {
      setFullname("")
      setUsername("")
      setEmail("")
      setPassword("")
    },
    onError: (error: unknown) => {
      console.log({ error })
    },
  })

  const onFullnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(event.target.value)
  }

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onFormSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    registerMutation.mutate()
  }

  if (registerMutation.isPending) return <Loading />

  return (
    <main className={styles.wrapper}>
      <article className={styles.container}>
        <section className={styles.heading}>
          <h2 className={styles.title}>Hey there</h2>
          <p className={styles.description}>
            <span className={styles.text}>Already have an account?</span>{" "}
            <Link to="/login" className={styles.link}>
              Login here
            </Link>
          </p>
        </section>
        <form onSubmit={onFormSubmit} className={styles.form}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="fullname">
              Full Name
            </label>
            <input
              required={true}
              type="text"
              id="fullname"
              className={styles.field}
              placeholder="Jane Doe"
              value={fullname}
              onChange={onFullnameChange}
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              required={true}
              type="username"
              id="username"
              className={styles.field}
              placeholder="janedoe420"
              value={username}
              onChange={onUsernameChange}
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              required={true}
              type="email"
              id="email"
              className={styles.field}
              placeholder="janedoe@mail.com"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              required={true}
              type="text"
              id="password"
              className={styles.field}
              placeholder="password"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <div className={styles.group}>
            <button type="submit" className={styles.action}>
              Register
            </button>
          </div>
        </form>
      </article>
    </main>
  )
}

export default Register
