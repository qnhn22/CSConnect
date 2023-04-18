import React from 'react'

function NavBar() {
    return (
        <nav className='nav-bar'>
            <h2 id="app-name">TECHmates</h2>
            <form>
                <input type='text' name='search' id='search' placeholder='Search...' />
            </form>
            <ul className='nav-links'>
                <li className='link'><a href='https://www.google.com/'>Home</a></li>
                <li className='link'><a href='https://www.google.com/'>New</a></li>
                <li className='link'><a href='https://www.google.com/'>Profile</a></li>
            </ul>
        </nav>
    )
}

export default NavBar