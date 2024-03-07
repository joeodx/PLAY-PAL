import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    
    <header className="order-double: solid border black p-5">
      <div className="flex place-content-center ">
       <Link href="/">
        Play-Pal 
       </Link>
       </div>
      <div>
       <p className="flex place-content-center">Tired of playing with yourself, now find others to play with.</p>
       </div> {/* </header>Play-Pal</h1> */}
    </header>
    
    </>
  )
}

export default Header