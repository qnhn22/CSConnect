import React from 'react'
import Card from 'react-bootstrap/Card'

function Post({ title, time, category, author, likes }) {
    return (
        <Card className='Post' style={{ width: '40rem', height: '12rem' }}>
            <Card.Body>
                <div className='top-info'>
                    <p>dfafdafd</p>
                    <p>category</p>
                </div>
                <Card.Link href="https://www.google.com/">
                    <Card.Title>fdsfdsf</Card.Title>
                </Card.Link>
                <div className='bottom-info'>
                    <p>20 Likes</p>
                    <p>Author</p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Post