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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route path="" element={<AuthRoutes />}>
        <Route path="" element={<RoleRoutes allowedRoles={["admin"]} />}>
          <Route path="/view-report" element={<ViewReport />} />
          <Route path="/admin" element={<div>For admin</div>} />
          <Route path="/user-management" element={<UserManagement />} />
        </Route>
        <Route
          path=""
          element={<RoleRoutes allowedRoles={["manager", "admin"]} />}
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
