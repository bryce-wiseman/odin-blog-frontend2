import Header from "./Header.jsx"
import createNewPost from "../actions/createNewPost.js"

function NewPostPage() {
let currentAuthor = localStorage.getItem('currentUserName')

    return(
        <>
        <Header />
        <div className='main-section'>
            <h2>Write a New Post</h2>
            <br />
            <form id='new-post-form' action={createNewPost}>
                <div className="form-sect">
                    <label htmlFor="newPostTitle">Post Title: </label>
                    <input type="text" name="newPostTitle" id="newPostTitle" required />
                </div>
                <br />
                <div className="form-sect">
                    <label htmlFor="newPostBody">Post Body: </label>
                    <textarea name="newPostBody" id="newPostBody" cols="30" rows="10" required ></textarea>
                </div>
                <br />
                <input type="hidden" name="newPostAuthor" value={currentAuthor} required />
                <button type="submit">Create Post</button>
            </form>
            <button onClick={() => {
                let path = window.location.href
                path = path.replace('/new-post', '/dashboard')
                window.location.href = path
            }}>Back to Dashboard</button>
        </div>
        </>
    )
}

export default NewPostPage