import styles from "./Search.module.css"
import { createPortal } from "react-dom"
import { useRef } from "react"

type Props = {
  onHideSearch: () => void
}

const container: HTMLElement = document.querySelector("#search")!

function Search({ onHideSearch }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const onSearch = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    onHideSearch()
  }

  const onOverlayClick = (event: React.MouseEvent) => {
    if (event.target === overlayRef.current) {
      onHideSearch()
    }
  }

  return createPortal(
    <section className={styles.wrapper}>
      <div ref={overlayRef} onClick={onOverlayClick} className={styles.overlay}>
        <figure className={styles.search}>
          <form onSubmit={onSearch} className={styles.form}>
            <div className={styles.group}>
              <input
                type="search"
                className={styles.field}
                placeholder="Search"
              />
            </div>
            {/* <div className={`${styles.group} ${styles.alt}`}>
              <button type="submit">Search</button>
            </div> */}
          </form>
        </figure>
      </div>
    </section>,
    container,
  )
}

export default Search
