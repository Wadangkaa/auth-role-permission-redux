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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/view-report" element={<ViewReport />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
)

export default router
