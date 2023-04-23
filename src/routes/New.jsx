import React, { useState } from 'react'
import './New.css'
import { supabase } from '../client'

function New() {
    const [post, setPost] = useState({
        title: "",
        category: "",
        content: "",
        numLikes: 0,
        image: "",
    })

    const createPost = async (e) => {
        e.preventDefault();
        console.log("hehe")
        const { data, error } = await supabase.from("Posts").insert({
            title: post.title,
            category: post.category,
            content: post.content,
            numLikes: post.numLikes,
            image_link: post.image,
        }).select();

        window.location = "/";
        console.log(data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }))
    }

    return (
        <form className='input-form' onSubmit={createPost} >
            <div className='input-field'>
                <label className='input-label' htmlFor="title">Title</label>
                <input type='text' id='title' name='title' value={post.title} onChange={handleChange} />
            </div>

            <div className='input-field'>
                <label className='input-label' htmlFor="category">Category</label>
                <input type='text' id='category' name='category' value={post.category} onChange={handleChange} />
            </div>

            <div className='input-field'>
                <label className='input-label' htmlFor="content">Content</label>
                <textarea id="content" name="content" value={post.content} onChange={handleChange} />
            </div>

            <div className='input-field'>
                <label className='input-label' htmlFor="image">Image (Optional)</label>
                <input type='text' id='image' name='image' value={post.image_link} onChange={handleChange} />
            </div>

            <input type='submit' value="Post" />
        </form>
    )
}

export default New