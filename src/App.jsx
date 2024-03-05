import { useState } from 'react'
import './App.css'
import Table from './components/table'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div>
        <Navbar/>
      </div>
      <div className='flex gap-4'>
      <Sidebar/>
   <Table/>
      </div>
    </div>
  )
}

export default App
