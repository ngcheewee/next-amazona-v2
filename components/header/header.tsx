import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <div className='navbar justify-between bg-base-300'>
                <Link href="/" className='btn btn-ghost text-lg' >
                    Next Amazona V2 
                </Link>
                <ul className='flex'>
                    <Link className='btn btn-ghost rounded-btn' href="/cart">
                        Cart
                    </Link>
                    <Link className='btn btn-ghost rounded-btn' href="/signin">
                        Sign in
                    </Link>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header
