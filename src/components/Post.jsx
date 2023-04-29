import React from 'react'
import Card from 'react-bootstrap/Card'
import './Post.css'
import { Link } from 'react-router-dom'

function Post({ title, time, topic, user, num_likes, id }) {
    return (
        <div className='Post'>
            <Card style={{ width: '34rem', height: '12rem' }}>
                <Card.Body>
                    <div className='top-info'>
                        <p className='time'>Posted at {time}</p>
                        <div className='topic'>{topic}</div>
                    </div>
                    <Link to={`/post/${id}`}>
                        <Card.Title>{title}</Card.Title>
                    </Link>
                    <div className='bottom-info'>
                        <div className='user'>By {user}</div>
                        <p className='num-likes'>{num_likes} {num_likes > 0 ? 'likes' : 'like'}</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post