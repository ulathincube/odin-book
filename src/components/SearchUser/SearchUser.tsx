import styles from "./SearchUser.module.css"

interface Props {
  searchQuery: string
  onSearchQuery: (query: string) => void
}

function SearchUser({ searchQuery, onSearchQuery }: Props) {
  return (
    <article className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            placeholder="Search"
            className={styles.field}
            value={searchQuery}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onSearchQuery(event.target.value)
            }
          />
        </div>
      </form>
    </article>
  )
}

export default SearchUser
