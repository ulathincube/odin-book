import { useNavigate } from "react-router"
import useAuth from "../../hooks/useAuth"
import { useEffect } from "react"
import { Outlet } from "react-router"

function Protected() {
  const navigate = useNavigate()
  const { token } = useAuth()

  useEffect(() => {
    const runEffect = () => {
      if (!token) {
        // navigate("/login")
      }
    }
    runEffect()
  }, [navigate, token])

  return <Outlet />
}

export default Protected
