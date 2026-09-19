import { createPortal } from "react-dom"
import styles from "./NewThread.module.css"

const container: HTMLElement = document.querySelector("#new-thread")!

function NewThread() {
  return createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <section className={styles.thread}>
            <article className={styles.actions}>
              <button className={styles.cancel}>Cancel</button>
              <h3 className={styles.title}>New Thread</h3>
              <div className={styles.options}>
                <button className={styles.option}>
                  <span className={styles.wrapper}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                      <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                  </span>
                </button>
                <button className={styles.option}>
                  <span className={styles.wrapper}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </span>
                </button>
              </div>
            </article>
          </section>
          <section className={styles.details}>
            <figure className={styles.info}>
              <div className={styles.box}>
                <img src="/assets/images/avatar.jpg" alt="User avatar" />
              </div>
              <div className={styles.user}>
                <span className={styles.username}>username</span>
                <span className={styles.wrapper}>
                  <svg
                    className={`${styles.icon} ${styles.alt}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span className={styles.topic}>Music Topic</span>
              </div>
            </figure>
            <form className={styles.form}>
              <div className={styles.group}>
                <textarea
                  className={styles.field}
                  placeholder="Add to Thread"
                ></textarea>
              </div>
              <div className={`${styles.group} ${styles.alt}`}>
                <button className={styles.post}>Post</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>,
    container,
  )
}

export default NewThread
