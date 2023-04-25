import React, { useState, useEffect } from 'react'
import './Update.css'
import { useParams } from 'react-router-dom'
import { supabase } from '../client';

function Update() {
    const params = useParams();

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }))
    }

    const handleEdit = async (e) => {
        e.preventDefault();

        const { error } = await supabase.from("Posts")
            .update({
                title: post.title,
                category: post.category,
                content: post.content,
                image_link: post.image_link,
            })
            .eq("id", `${params.id}`)

        console.log(error)
        window.location = `/post/${params.id}`
    }

    const handleDelete = async () => {
        const { error } = await supabase.from("Posts")
            .delete()
            .eq("id", `${params.id}`)

        console.log(error)
        window.location = "/"
    }

    if (post) {
        return (
            <form className='update-form' onSubmit={handleEdit}>
                <div className='update-field'>
                    <label className='update-label' htmlFor="title">Title</label>
                    <input type='text' id='title' name='title' value={post.title} onChange={handleChange} />
                </div>

                <div className='update-field'>
                    <label className='update-label' htmlFor="category">Category</label>
                    <input type='text' id='category' name='category' value={post.category} onChange={handleChange} />
                </div>

                <div className='update-field'>
                    <label className='update-label' htmlFor="content">Content</label>
                    <textarea id="content" name="content" value={post.content} onChange={handleChange} />
                </div>

                <div className='update-field'>
                    <label className='update-label' htmlFor="image_link">Image (Optional)</label>
                    <input type='text' id='image_link' name='image_link' value={post.image_link} onChange={handleChange} />
                </div>

                <input type='submit' value="Edit" />
                <input type='button' value="Delete" onClick={handleDelete} />
            </form>
        )
    } else {
        return (
            <></>
        )
    }

}

export default Update