import React from 'react'
import MenuItem from './MenuItem'

const Navbar = () => {
  return (
    <nav className='flex flex-col gap-2
    sm:flex-row
    '>
        <div className="companyLogo text-white">DVSY</div>
        <div className="menu 
        flex justify-center items-center flex-wrap gap-2 w-full
        sm:justify-end
        ">
            <MenuItem text="DESIGNERS" />
            <MenuItem text="COLLABS" />
            <MenuItem text="EVENTS" />
            <MenuItem text="BLOG" />
            <MenuItem text="CARD" />
            <MenuItem text="GET IN TOUCH" />
        </div>
    </nav>
  )
}

export default Navbar
