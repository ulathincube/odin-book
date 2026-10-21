import styles from "./Login.module.css"
import { Link } from "react-router"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { loginUser } from "../../services/users"

function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const loginMutation = useMutation({
    mutationFn: () => loginUser({ email, password }),
  })

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onFormSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    loginMutation.mutate()
  }

  return (
    <main className={styles.wrapper}>
      <article className={styles.container}>
        <section className={styles.heading}>
          <h2 className={styles.title}>Welcome back</h2>
          <p className={styles.description}>
            <span className={styles.text}>First time here?</span>{" "}
            <Link to="/register" className={styles.link}>
              Sign up for free
            </Link>
          </p>
        </section>
        <form onSubmit={onFormSubmit} className={styles.form}>
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
              Login
            </button>
          </div>
        </form>
      </article>
    </main>
  )
}

export default Login
