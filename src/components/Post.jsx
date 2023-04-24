import React from 'react'
import Card from 'react-bootstrap/Card'
import './Post.css'

function Post({ title, time, category, author, num_likes }) {
    return (
        <div className='Post'>
            <Card style={{ width: '40rem', height: '10rem' }}>
                <Card.Body>
                    <div className='top-info'>
                        <p className='time'>Posted at {time}</p>
                        <div className='category'>{category}</div>
                    </div>
                    <Card.Link href="https://www.google.com/">
                        <Card.Title>{title}</Card.Title>
                    </Card.Link>
                    <div className='bottom-info'>
                        <div className='author'>By {author}</div>
                        <p className='num-likes'>{num_likes} Likes</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post