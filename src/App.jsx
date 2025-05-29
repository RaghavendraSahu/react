import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-gray-800 font-thin py-10 px-[10%] w-screen text-white h-screen'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App