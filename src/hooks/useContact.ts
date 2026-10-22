import { useContext } from "react"
import ChatContext from "../context/ChatContext"

function useContact() {
  return useContext(ChatContext)
}

export default useContact
