import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Messages from "./pages/Messages"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
import NewThread from "./components/NewThread"

function App() {
  return (
    <Router>
      <NewThread />
      <Routes>
        <Route index={true} element={<Home />} />
        <Route path="users" element={<User />} />
        <Route path="messages" element={<Messages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
