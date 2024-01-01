import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const AuthRoutes = () => {
  const isLogged = useSelector((state) => state.auth.authUser)
  return isLogged ? <Outlet /> : <Navigate to="/" />
}

export default AuthRoutes
