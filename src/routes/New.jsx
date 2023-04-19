import React from 'react'
import './New.css'

function New() {
    return (
        <form className='input-form'>
            <div className='input-field'>
                <label className='input-label' htmlFor="title">Title</label>
                <input type='text' id='title' name='title' />
            </div>

            <div className='input-field'>
                <label className='input-label' htmlFor="category">Category</label>
                <input type='text' id='category' name='category' />
            </div>

            <div className='input-field'>
                <label className='input-label' htmlFor="content">Content</label>
                <textarea id="content" name="content" />
            </div>

            <div className='input-field'>
                <label className='input-label' htmlFor="image">Image (Optional)</label>
                <input type='text' id='image' name='image' />
            </div>

            <input type='submit' value="Post" />
        </form>
    )
}

export default New