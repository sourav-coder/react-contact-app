import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <Link to="/" className="navbar-brand  pl-5">React Contact App</Link>
            </nav>

        </div>
    )
}

export default Navbar
