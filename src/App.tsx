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
import ChatContext from "./context/ChatContext"
import AuthTokenContext from "./context/AuthTokenContext"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ErrorNotification from "./components/ErrorNotification"
import Protected from "./components/Protected"

interface User {
  id: string
  created: string
  username: string
  profile: {
    id: string
    status: string
    avatar: string
    birthday: string
    location: string
  }
  _count: {
    followedBy: number
    following: number
  }
}

const SHOW_MS: number = 2000

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [showErrorNotification, setShowErrorNotification] =
    useState<boolean>(false)
  const [contact, setContact] = useState<User | null>(null)
  const [token, setToken] = useState<string>(() =>
    window.localStorage.getItem("token")
      ? window.localStorage.getItem("token")!
      : "",
  )

  // useEffect(() => {
  //   const runEffect = async () => {
  //     try {
  //       const { data } = await findUserByEmail("Tonya8@gmail.com")
  //       console.log({ data })
  //       setUser(data)
  //     } catch (error: unknown) {
  //       if (error instanceof Error) console.log({ error })
  //     }
  //   }

  //   runEffect()
  // }, [])

  useEffect(() => {
    const runEffect = () => {
      if (token) {
        window.localStorage.setItem("token", token)
      }
    }

    runEffect()
  }, [token])

  const cachedSetUser = useCallback((newUser: User) => setUser(newUser), [])

  const memoizedUserValue = {
    user,
    onChangeUser: cachedSetUser,
  }

  const memoizedContactValue = {
    contact,
    onChangeContact: useCallback(
      (newContact: User) => setContact(newContact),
      [],
    ),
  }

  const memoizedTokenValue = {
    token,
    onChangeToken: useCallback((newToken: string) => setToken(newToken), []),
  }

  const onShowErrorNotification = useCallback(() => {
    setShowErrorNotification(true)
    setTimeout(() => setShowErrorNotification(false), SHOW_MS)
  }, [])

  return (
    <AuthTokenContext value={memoizedTokenValue}>
      <UserContext value={memoizedUserValue}>
        {showErrorNotification && <ErrorNotification />}
        <ErrorContext value={onShowErrorNotification}>
          <ChatContext value={memoizedContactValue}>
            <Router>
              <Routes>
                <Route element={<Protected />}>
                  <Route index={true} element={<Home />} />
                  <Route path="users/:userId" element={<UserProfile />} />
                  <Route path="posts/:postId" element={<PostDetail />} />
                  <Route path="messages/chat/:userId" element={<Chat />} />
                  <Route path="messages" element={<Messages />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </ChatContext>
        </ErrorContext>
      </UserContext>
    </AuthTokenContext>
  )
}

export default App
