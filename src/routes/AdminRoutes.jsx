import { Route, Routes } from "react-router-dom"
import ViewReport from "../components/ViewReport"
import UserManagement from "../components/UserManagement"

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/view-report" element={<ViewReport />} />
      <Route path="/admin" element={<div>For admin</div>} />
      <Route path="/user-management" element={<UserManagement />} />
    </Routes>
  )
}

export default AdminRoutes
