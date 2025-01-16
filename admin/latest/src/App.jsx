import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'


const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
        <Navbar />
        <hr />
        <div className='w-full flex'>
          <Sidebar />
        </div>
      </>
    </div>
  )
}

export default App