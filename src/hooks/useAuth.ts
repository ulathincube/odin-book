import { useContext } from "react"
import AuthTokenContext from "../context/AuthTokenContext"

function useAuth() {
  return useContext(AuthTokenContext)
}

export default useAuth
