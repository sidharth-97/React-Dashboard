import React from 'react'
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div className="w-screen min-h-screen bg-black">
    <div className="container min-h-full">
    <div className='py-3'>
      <Navbar />
    </div>
    <div className="flex gap-4 pb-5">
      <Sidebar />
      {/* <EventDetails /> */}
     {children}
      </div>
      </div>
  </div>
  )
}

export default Layout