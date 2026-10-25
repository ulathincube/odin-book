import styles from "./SearchBar.module.css"

function SearchBar() {
  return (
    <article className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.group}>
          <input type="search" className={styles.field} placeholder="Search" />
          <span className={styles.box}>
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
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </div>
      </form>
    </article>
  )
}

export default SearchBar
