import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header({ searchInput, setSearchInput }) {
    const handleSearch = (e) => {
        console.log(e.target.value)
        setSearchInput(e.target.value)
    }

    return (
        <nav className='header'>
            <h2 id="app-name">TECHmates</h2>
            <form>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="search-icon">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>

                <input type='text' name='search' id='search' placeholder='Search...' value={searchInput} onChange={handleSearch} />
            </form>
            <ul className='nav-links'>
                <li className='link'><Link to="/">Home</Link></li>
                <li className='link'><Link to="/new">New</Link></li>
                <li className='link'><Link to="/">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default Header