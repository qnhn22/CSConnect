import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className='sidebar'>
            <ul>
                <li><Link to={'/learning'}>Learning</Link></li>
                <li><Link to={'/career'}>Career</Link></li>
                <li><Link to={'/technical-questions'}>Technical questions</Link></li>
                <li><Link to={'/events'}>Events</Link></li>
            </ul>
        </aside>
    )
}

export default Sidebar