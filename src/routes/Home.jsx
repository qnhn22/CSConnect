import React, { useEffect, useState } from 'react'
import FeedPost from "../components/FeedPost"
import Sorting from '../components/Sorting';
import { useOutletContext } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css"

function Home() {
    const [searchInput, posts, sortedByTime, setSortedByTime] = useOutletContext();

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
                                <FeedPost
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
    )
}

export default Home