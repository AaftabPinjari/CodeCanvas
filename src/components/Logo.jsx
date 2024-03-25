import { NavLink } from "react-router-dom"

function Logo() {
    return (
        <NavLink to="/">
            <button>
                <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold border-y-[1px] mb-4">Code Canvas</h1>
            </button>
        </NavLink>
    )
}

export default Logo