import { createContext } from "react"

const ErrorContext = createContext<() => void>(() => {})

export default ErrorContext
