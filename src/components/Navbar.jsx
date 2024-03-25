import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex  w-2/3 border-y-[0.1px] border-gray-700 items-center justify-evenly'>
            <NavLink className={({ isActive }) => isActive ? "border-t-[0.5px] " : ""} to="/">
                <button className='hover:border-y-[0.5px] py-2'>
                    Home
                </button></NavLink>
            <NavLink className={({ isActive }) => isActive ? "border-t-[0.5px] " : ""} to="/blogs">
                <button className='hover:border-y-[0.5px] py-2'>
                    Blogs
                </button></NavLink>
            <NavLink className={({ isActive }) => isActive ? "border-t-[0.5px] " : ""} to="/create">
                <button className='hover:border-y-[0.5px] py-2'>
                    Create
                </button></NavLink>
        </div>
    )
}

export default Navbar