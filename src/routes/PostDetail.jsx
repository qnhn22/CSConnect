import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './PostDetail.css'
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { Link } from 'react-router-dom';

function PostDetail() {
    let params = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase.from("Posts")
                .select()
                .eq("id", `${params.id}`)

            // console.log(data[0])
            // console.log(error)
            setPost(data[0]);
        }

        fetchPost();
    }, [params.id])

    const handleLike = async () => {
        const { data, error } = await supabase.from("Posts")
            .update({ num_likes: `${post.num_likes + 1}` })
            .eq("id", `${params.id}`)
            .select()

        setPost(data[0]);
    }

    return (
        <div className='post'>
            {post &&
                <Card style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <div className='detail-info'>
                            <p className='detail-author'>By {post.author_id}</p>
                            <p className='detail-time'>Post at {post.created_at}</p>
                        </div>
                        <Card.Text>
                            {post.content}
                        </Card.Text>
                        <Card.Img src={`${post.image_link}`} />
                        <div className='like-section'>
                            <button className='like-button' onClick={handleLike}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="like-icon">
                                    <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
                                </svg>
                            </button>
                            <p className='num_likes'>{post.num_likes} Likes</p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="comment-icon">
                            <path fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clipRule="evenodd" />
                        </svg>
                        <Link to={`/post/edit/${post.id}`}>
                            <button className='edit-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="edit-icon">
                                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                                </svg>
                            </button>
                        </Link>

                        <div className='comment-container'>

                        </div>
                    </Card.Body>
                </Card>
            }
        </div>
    );
}

export default PostDetail;



{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="delete-icon">
<path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
</svg>  */}