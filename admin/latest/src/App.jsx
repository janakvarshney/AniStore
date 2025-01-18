import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import {Route,Routes} from 'react-router-dom'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Orders from './pages/Orders.jsx'


const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
        <Navbar />
        <hr />
        <div className='w-full flex'>
          <Sidebar />
          <div className=' w-[82%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base ' > 
          <Routes>
            <Route path='/add' element={<Add />} />
            <Route path='/list' element={<List/>} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
          </div>
        </div>
      </>
    </div>
  )
}

export default App