import React from 'react'
import Navbar from './Navbar'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default MainLayout