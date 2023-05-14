import React from 'react'
import './Comment.css'
import { supabase } from '../client'

function Comment({ id, content, num_likes }) {
    const handleLike = async () => {
        const { error } = await supabase
            .from("Comments")
            .update(
                {
                    num_likes: `${num_likes + 1}`
                }
            )
            .eq("id", id)
    }

    return (
        <div className='comment'>
            <p>{content}</p>
            <div className='like-section'>
                <button className='cmt-like-button' onClick={handleLike}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="like-icon">
                        <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
                    </svg>
                </button>
                <p className='num_likes'>{num_likes} Likes</p>
            </div>
        </div>
    )
}

export default Comment