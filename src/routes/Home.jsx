import React, { useEffect, useState } from 'react'
import Post from "../components/Post"
import { supabase } from '../client';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase.from("Posts")
                .select()
                .order("created_at", { ascending: false });

            setPosts(data)
        }
        fetchPosts();
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