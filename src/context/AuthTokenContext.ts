import { createContext } from "react"

const AuthTokenContext = createContext<{ token: string }>({ token: "" })

export default AuthTokenContext
