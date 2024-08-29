import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen container'>
        {/* Header */}
        <Header/>
        {/* body */}
        <Outlet/>
      </main>

      {/* footer */}
      <div className='p-10 text-center bg-gray-800 mt-10'>Made with 💖 by Shivam Gupta</div>
    </div>
  )
}

export default AppLayout
