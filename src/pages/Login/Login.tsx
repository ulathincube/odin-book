import styles from "./Login.module.css"
import { Link } from "react-router"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { loginUser } from "../../services/users"
import Loading from "../../components/Loading"
import { useNavigate } from "react-router"
import useError from "../../hooks/useError"
import useAuth from "../../hooks/useAuth"
import useUser from "../../hooks/useUser"

function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const navigate = useNavigate()
  const onShowNotificationError = useError()

  const { onChangeToken } = useAuth()
  const { onChangeUser } = useUser()

  const loginMutation = useMutation({
    mutationFn: () => loginUser({ email, password }),
    onSuccess: (data) => {
      setEmail("")
      setPassword("")
      window.localStorage.setItem("token", data.data.token)
      window.localStorage.setItem("user", JSON.stringify(data.data.user))
      onChangeToken(data.data.token)
      onChangeUser(data.data.user)
      navigate("/")
    },
    onError: () => {
      onShowNotificationError()
    },
  })

  const onToggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

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

  const onLoginDemoUser = () => {
    setEmail("michaeldesanta@yahoo.com")
    setPassword("grandtheftauto")
    loginMutation.mutate()
  }

  if (loginMutation.isPending) return <Loading />

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
          <div className={`${styles.group} ${styles.grouping}`}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              required={true}
              type={showPassword || !password ? "text" : "password"}
              id="password"
              className={styles.field}
              placeholder="password"
              value={password}
              onChange={onPasswordChange}
            />
            <button onClick={onToggleShowPassword} className={styles.box}>
              {!showPassword && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.icon}
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
              {showPassword && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.icon}
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              )}
            </button>
          </div>
          <div className={styles.group}>
            <button type="submit" className={styles.action}>
              Login
            </button>
          </div>
          <div className={styles.group}>
            <button
              onClick={onLoginDemoUser}
              type="button"
              className={styles.demo}
            >
              Use Demo account
            </button>
          </div>
        </form>
      </article>
    </main>
  )
}

export default Login
