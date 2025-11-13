import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout