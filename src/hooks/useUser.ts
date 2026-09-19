import UserContext from "../context/UserContext"
import { useContext } from "react"

function useUser() {
  const userContext = useContext(UserContext)
  return userContext
}

export default useUser
