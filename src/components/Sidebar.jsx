import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className='sidebar'>
            <ul>
                <li><Link>Learning</Link></li>
                <li><Link>Career</Link></li>
                <li><Link>Interview</Link></li>
                <li><Link>Technical questions</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Events</Link></li>
            </ul>
        </aside>
    )
}

export default Sidebar