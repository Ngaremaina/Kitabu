import { useState } from "react";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

function Header({ searchBook }) {
    const [search, setSearch] = useState("")
    //passing the submit function that listens for the submit event listener
    const handleSubmit = (e) => {
        e.preventDefault()
        //calling the search function
        searchBook(search)
    }
    return (
        //displaying the nav bar
        <nav className="flex flex-wrap items-center justify-between gap-4 bg-black px-4 py-3 text-white sm:px-6">
            <div className="flex items-center gap-1">
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/addbook" className={linkClass}>Add Book</NavLink>
                <NavLink to="/contact us" className={linkClass}>Contact Us</NavLink>
            </div>
            <form className="flex items-center" role="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-40 rounded-l-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-green-500 focus:outline-none sm:w-56"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button
                    className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-700 bg-gray-800 px-3 py-2 text-white hover:bg-gray-700"
                    type="submit"
                    aria-label="Submit search"
                >
                    <Search size={18} />
                </button>
            </form>
        </nav>
    )
}

export default Header
