import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Messages from "./pages/Messages"
import Chat from "./pages/Chat"
import UserProfile from "./pages/UserProfile"
import PostDetail from "./pages/PostDetail"
import NotFound from "./pages/NotFound"
import { findUserByEmail } from "./services/users"
import { useState, useEffect, useCallback } from "react"
import UserContext from "./context/UserContext"
import ErrorContext from "./context/ErrorContext"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ErrorNotification from "./components/ErrorNotification"

interface User {
  username: string
  id: string
  profile: {
    status: string
    avatar: string
  }
}

const SHOW_MS: number = 2000

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [showErrorNotification, setShowErrorNotification] =
    useState<boolean>(false)

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

  const onShowErrorNotification = useCallback(() => {
    setShowErrorNotification(true)
    setTimeout(() => setShowErrorNotification(false), SHOW_MS)
  }, [])

  return (
    <UserContext value={memoizedValue}>
      {showErrorNotification && <ErrorNotification />}
      <ErrorContext value={onShowErrorNotification}>
        <Router>
          <Routes>
            <Route index={true} element={<Home />} />
            <Route path="users/:userId" element={<UserProfile />} />
            <Route path="posts/:postId" element={<PostDetail />} />
            <Route path="messages/chat/:userId" element={<Chat />} />
            <Route path="messages" element={<Messages />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ErrorContext>
    </UserContext>
  )
}

export default App
