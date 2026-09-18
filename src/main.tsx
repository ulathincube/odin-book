import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StrictMode } from "react"
import App from "./App.tsx"
import "./reset.css"
import "./index.css"

const client = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
