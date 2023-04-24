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

            setPosts(data);
        }
        fetchPosts();
    }, [posts])

    return (
        <div className='feed'>
            {posts && posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        category={post.category}
                        time={post.created_at}
                        num_likes={post.num_likes}
                        id={post.id}
                    />
                )
            })}
        </div>
    )
}

export default Home