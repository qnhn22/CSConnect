import React from 'react'
import Card from 'react-bootstrap/Card'
import './Post.css'
import { Link } from 'react-router-dom'

function Post({ title, time, category, author, num_likes, id }) {
    return (
        <div className='Post'>
            <Card style={{ width: '40rem', height: '10rem' }}>
                <Card.Body>
                    <div className='top-info'>
                        <p className='time'>Posted at {time}</p>
                        <div className='category'>{category}</div>
                    </div>
                    <Link to={`/post/${id}`}>
                        <Card.Title>{title}</Card.Title>
                    </Link>
                    <div className='bottom-info'>
                        <div className='author'>By {author}</div>
                        <p className='num-likes'>{num_likes} {num_likes > 0 ? 'likes' : 'like'}</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post