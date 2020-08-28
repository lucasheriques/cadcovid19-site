import React from "react"
import Sidebar from "./Sidebar"
const Layout = ({ children }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      {children}
    </div>
  )
}
export default Layout
