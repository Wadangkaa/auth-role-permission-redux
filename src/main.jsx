import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Layout from "./pages/Layout.jsx"
import Home from "./pages/Home.jsx"
import NoPage from "./pages/NoPage.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
