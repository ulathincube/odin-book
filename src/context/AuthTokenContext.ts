import { createContext } from "react"

const AuthTokenContext = createContext<{
  token: string
  onChangeToken: (newToken: string) => void
}>({ token: "", onChangeToken: () => {} })

export default AuthTokenContext
