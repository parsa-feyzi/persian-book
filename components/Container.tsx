import React, { CSSProperties } from 'react'

interface I_Props { children: React.ReactNode; styles?: CSSProperties }

function Container({children, styles}: I_Props) {
  return (
    <div style={styles} className='container lg:px-[2vw] md:px-[4vw] px-[6vw] mx-auto'>{children}</div>
  )
}

export default Container