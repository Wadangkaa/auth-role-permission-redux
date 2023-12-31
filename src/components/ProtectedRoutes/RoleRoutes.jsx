import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const RoleRoutes = ({ allowedRoles }) => {
  const { role } = useSelector((state) => state.auth.authUser)
  // eslint-disable-next-line react/prop-types
  const hasRoles = allowedRoles.includes(role)
  return hasRoles ? <Outlet /> : <Navigate to="/" />
}

export default RoleRoutes
