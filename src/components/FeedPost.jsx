import React from 'react'
import './FeedPost.css'

function Post({ title, time, topic, user, num_likes, id }) {
    return (
        <div className="feed-post" style={{ width: '40rem', height: '12rem' }}>
            <div className='top-info'>
                <p className='time'>Posted at {time}</p>
                <div className='topic'>{topic}</div>
            </div>
            <a href={`/post/${id}`}>
                <h5 className='feed-post-title'>{title}</h5>
            </a>
            <div className='bottom-info'>
                <div className='user'>By {user}</div>
                <p className='num-likes'>{num_likes} {num_likes > 0 ? 'likes' : 'like'}</p>
            </div>
        </div>
    )
}

export default Post