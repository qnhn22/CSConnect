import React, { useEffect, useState } from 'react'
import Post from "../components/Post"
import { supabase } from '../client';
import Sorting from '../components/Sorting';
import { useOutletContext } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css"

function Home() {
    const [posts, setPosts] = useState([]);
    const [sortedByTime, setSortedByTime] = useState(true);
    const [searchInput, setSearchInput] = useOutletContext();

    useEffect(() => {
        let fetchPosts;
        if (sortedByTime) {
            fetchPosts = async () => {
                const { data, error } = await supabase.from("Posts")
                    .select()
                    .order("created_at", { ascending: false });

                setPosts(data);
            }
        } else {
            fetchPosts = async () => {
                const { data, error } = await supabase.from("Posts")
                    .select()
                    .order("num_likes", { ascending: false });

                setPosts(data);
            }
        }
        fetchPosts();
    }, [posts])

    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <Sidebar />
                </Col>
                <Col lg={9}>
                    <div className='feed'>
                        <Sorting sortedByTime={sortedByTime} setSortedByTime={setSortedByTime} />
                        {posts && posts.filter((post) => post.title.toLowerCase().includes(searchInput.toLowerCase())).map((post) => {
                            return (
                                <Post
                                    key={post.id}
                                    title={post.title}
                                    topic={post.topic}
                                    user={post.user_id}
                                    time={post.created_at}
                                    num_likes={post.num_likes}
                                    id={post.id}
                                />
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </Container>

        // <div className='home'>
        //     <Sidebar />
        //     <div className='feed'>
        //         <Sorting sortedByTime={sortedByTime} setSortedByTime={setSortedByTime} />
        //         {posts && posts.filter((post) => post.title.toLowerCase().includes(searchInput.toLowerCase())).map((post) => {
        //             return (
        //                 <Post
        //                     key={post.id}
        //                     title={post.title}
        //                     topic={post.topic}
        //                     user={post.user_id}
        //                     time={post.created_at}
        //                     num_likes={post.num_likes}
        //                     id={post.id}
        //                 />
        //             )
        //         })}
        //     </div>
        // </div>
    )
}

export default Home