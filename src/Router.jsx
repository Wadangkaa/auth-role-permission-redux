import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Layout from "./pages/Layout.jsx"
import Home from "./pages/Home.jsx"
import NoPage from "./pages/NoPage.jsx"
import Profile from "./components/Profile.jsx"
import UserManagement from "./components/UserManagement.jsx"
import Setting from "./components/Setting.jsx"
import ViewReport from "./components/ViewReport.jsx"
import AuthRoutes from "./components/ProtectedRoutes/AuthRoutes.jsx"
import RoleRoutes from "./components/ProtectedRoutes/RoleRoutes.jsx"
import { ROLE } from "./enums/role.js"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      {/* authenticated routes */}
      <Route path="" element={<AuthRoutes />}>
        {/* admin routes */}
        <Route path="" element={<RoleRoutes allowedRoles={[ROLE.ADMIN]} />}>
          <Route path="/view-report" element={<ViewReport />} />
          <Route path="/admin" element={<div>For admin</div>} />
          <Route path="/user-management" element={<UserManagement />} />
        </Route>

        {/* admin and manager routes */}
        <Route
          path=""
          element={<RoleRoutes allowedRoles={[ROLE.MANAGER, ROLE.ADMIN]} />}
        >
          <Route path="/manager" element={<div>For manager</div>} />
        </Route>

        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
      <Route path="/guest" element={<div>You are guest</div>} />

      <Route path="*" element={<NoPage />} />
    </Route>
  )
)

export default router
