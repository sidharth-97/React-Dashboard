import React from 'react'
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div className="container w-screen min-h-screen">
    <div className="r-container min-h-full">
    <div className='py-3'>
      <Navbar />
    </div>
    <div className="flex gap-4">
      <Sidebar />
      {/* <EventDetails /> */}
     {children}
      </div>
      </div>
  </div>
  )
}

export default Layout