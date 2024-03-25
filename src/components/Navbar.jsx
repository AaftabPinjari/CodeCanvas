import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex w-full justify-between'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/create">Create</NavLink>
        </div>
    )
}

export default Navbar