import React from 'react'
import './Update.css'

function Update() {
    return (
        <form className='update-form'>
            <div className='update-field'>
                <label className='update-label' htmlFor="title">Title</label>
                <input type='text' id='title' name='title' />
            </div>

            <div className='update-field'>
                <label className='update-label' htmlFor="category">Category</label>
                <input type='text' id='category' name='category' />
            </div>

            <div className='update-field'>
                <label className='update-label' htmlFor="content">Content</label>
                <textarea id="content" name="content" />
            </div>

            <div className='update-field'>
                <label className='update-label' htmlFor="image">Image (Optional)</label>
                <input type='text' id='image' name='image' />
            </div>

            <input type='submit' value="Post" />
        </form>
    )
}

export default Update