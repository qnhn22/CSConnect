import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Sorting.css"

function Sorting() {
    return (
        <div className='sorting'>
            <Button variant="secondary">Newest</Button>
            <Button variant="secondary">Most Liked</Button>
        </div>
    )
}

export default Sorting