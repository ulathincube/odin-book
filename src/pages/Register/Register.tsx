import styles from "./Register.module.css"
import { Link } from "react-router"

function Register() {
  const onFormSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

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
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              required={true}
              type="email"
              id="email"
              className={styles.field}
              placeholder="janedoe@mail.com"
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
