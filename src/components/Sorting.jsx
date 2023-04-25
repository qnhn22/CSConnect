import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Sorting.css"

function Sorting({ sortedByTime, setSortedByTime }) {
    const handleNewestSorting = () => {
        if (!sortedByTime) {
            setSortedByTime(true)
        }
    }

    const handleMostLikedSorting = () => {
        if (sortedByTime) {
            setSortedByTime(false)
        }
    }

    return (
        <div className='sorting'>
            <p className='sorted-by'>Sorted by:</p>
            <Button variant="secondary" onClick={handleNewestSorting}>Newest</Button>
            <Button variant="secondary" onClick={handleMostLikedSorting}>Most Liked</Button>
        </div>
    )
}

export default Sorting