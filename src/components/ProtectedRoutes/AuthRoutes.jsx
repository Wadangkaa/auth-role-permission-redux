import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const AuthRoutes = ({ children }) => {
  const isLogged = useSelector((state) => state.auth.authUser)
  return isLogged ? children : <Navigate to="/" />
}

export default AuthRoutes
