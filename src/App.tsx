import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Messages from "./pages/Messages"
import UserProfile from "./pages/UserProfile"
import NotFound from "./pages/NotFound"
import { findUserByEmail } from "./services/users"
import { useState, useEffect, useCallback } from "react"
import UserContext from "./context/UserContext"

interface User {
  username: string
  id: string
  profile: {
    status: string
    avatar: string
  }
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const runEffect = async () => {
      try {
        const { data } = await findUserByEmail("Tonya8@gmail.com")
        setUser(data)
      } catch (error: unknown) {
        if (error instanceof Error) console.log({ error })
      }
    }

    runEffect()
  }, [])

  const cachedSetUser = useCallback((newUser: User) => setUser(newUser), [])

  const memoizedValue = {
    user,
    onChangeUser: cachedSetUser,
  }

  return (
    <UserContext value={memoizedValue}>
      <Router>
        <Routes>
          <Route index={true} element={<Home />} />
          <Route path="users/:userId" element={<UserProfile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserContext>
  )
}

export default App
