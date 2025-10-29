import React from 'react'

function Container({children}: { children: React.ReactNode }) {
  return (
    <div className='container md:px-[4vw] px-[6vw] mx-auto'>{children}</div>
  )
}

export default Container