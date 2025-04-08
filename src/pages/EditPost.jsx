import { useState } from 'react'
import Header from './Header.jsx'
import editUserPost from '../actions/editUserPost.js'

function EditPost() {

    let userSignedIn = localStorage.getItem('userToken')
    let editingPost = localStorage.getItem('post2edit')
    let postParse = JSON.parse(editingPost)
    
    const [postTitle, setPostTitle] = useState(postParse.title)
    const [postBody, setPostBody] = useState(postParse.body)

    function changeHandler(e) {
        //console.log(e.target.id)
        switch(e.target.id) {
            case 'editPostTitle': {
                setPostTitle(e.target.value)
            }
            break;
            case 'editPostBody': {
                setPostBody(e.target.value)
            }
            break;
        }
    }
    
        return(
            <>
            <Header />
            <div className='main-section'>
                <h2>Edit Post</h2>
                <br />
                <form action={editUserPost} id='edit-post-form'>
                    <div className='form-sect'>
                        <label htmlFor="editPostTitle">Title:</label>
                        <input type="text" name="editPostTitle" id="editPostTitle" value={postTitle} onChange={(e) => {changeHandler(e)}}/>
                    </div>
                    <br />
                    <div className='form-sect'>
                        <label htmlFor="editPostBody">Body:</label>
                        <textarea name="editPostBody" id="editPostBody" rows='10' cols='30' value={postBody} onChange={(e) => {changeHandler(e)}}></textarea>
                    </div>
                    <br />
                    <div className='form-sect'>
                        <label htmlFor="editPostPublished">Published:</label>
                        <input type="checkbox" name="editPostPublished" id="editPostPublished" />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>

                <button onClick={() => {
                    let path = String(window.location.href)
                    path = path.replace('/edit', '/dashboard')
                    window.location.href = path
                }}>Don't Save Changes & Return to Dashboard</button>
            </div>
           
            </>
        )
    }


export default EditPost