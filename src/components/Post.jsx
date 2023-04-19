import React from 'react'
import Card from 'react-bootstrap/Card'

function Post({ title, time, category, author, likes }) {
    return (
        <Card className='Post' style={{ width: '40rem', height: '12rem' }}>
            <Card.Body>
                <div className='top-info'>
                    <p>dfafdafd</p>
                    <p>abcabcabc</p>
                </div>
                <Card.Link href="https://www.google.com/">
                    <Card.Title>fdsfdsf</Card.Title>
                </Card.Link>
                <Card.Text>
                    dfsjflkafjlkdajflkdskjlfl;afjldkssfjlasfj;asdlfkladsjfldsjafa;lfkjalksdfadf
                </Card.Text>
                <div className='bottom-info'>
                    <p>20 Likes</p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Post