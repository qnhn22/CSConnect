import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='nav-bar'>
            <h2 id="app-name">TECHmates</h2>
            <form>
                <input type='text' name='search' id='search' placeholder='Search...' />
            </form>
            <ul className='nav-links'>
                <li className='link'><Link to="/">Home</Link></li>
                <li className='link'><Link to="/new">New</Link></li>
                <li className='link'><Link to="/">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar