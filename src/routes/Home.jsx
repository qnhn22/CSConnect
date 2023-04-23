import React, { useEffect, useState } from 'react'
import Post from "../components/Post"

function Home({ data }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(data)
    }, [posts])

    return (
        <div className='feed'>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Home