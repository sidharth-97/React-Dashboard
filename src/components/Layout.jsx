import React from 'react'
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div className="container w-screen min-h-screen">
    <div className="r-container">
    <div>
      <Navbar />
    </div>
    <div className="flex gap-4 h-full">
      <Sidebar />
      {/* <EventDetails /> */}
     {children}
      </div>
      </div>
  </div>
  )
}

export default Layout