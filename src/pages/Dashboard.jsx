import getAllUserPosts from '../actions/getAllUserPosts.js'
import getOneUserPost from '../actions/getOneUserPost.js'
import Header from './Header.jsx'

function PostBox(props) {
    let postStatus
    if(props.arr.published == false) {
        postStatus = 'Unpublished'
    } else {
        postStatus = 'Published'
    }

    return (
        <div className='post-container'>
            <div className='post-top-row'>
                <p>@{localStorage.getItem('currentUserName')}</p>
                <div className='post-btns'>
                    <form action={getOneUserPost}>
                        <input type="hidden" name="postID" value={props.arr.id} />
                        <button type='submit'>Edit</button>
                    </form>
                    <form action={'deleteOneUserPost'}>
                        <input type="hidden" name="postID" value={props.arr.id} />
                        <button type='submit'>Delete</button>
                    </form>
                </div>
            </div>
            <div className='post-mid-row'>
                <h4 className='post-title'>{props.arr.title}</h4>
                <p className='post-body'>{props.arr.body}</p>
            </div>
            <div className='post-bot-row'>
                <h6 className='post-time'>{props.arr.timestamp}</h6>
                <h6 className='post-status'>{postStatus}</h6>
            </div>
        </div>
    )
}

function Dashboard() {
    getAllUserPosts()
    let userSignedIn = localStorage.getItem('userToken')
    let postList = JSON.parse(localStorage.getItem('postList'))

    if(!postList) {
        setTimeout(() =>{window.location.reload()}, 1000)
        return(
            <>
            <h2>Loading your posts...</h2>
            </>
        )
    } else {
        return(
            <>
            <Header />
            <div className='main-section'>
                {userSignedIn && <button className='newpost-btn' onClick={() => {
                let path = window.location.href
                path = path.replace('/dashboard', '/new-post')
                window.location.href = path
            }}>New Post</button>
                }
                <div className='all-posts-container'>
                    {userSignedIn && 
                    postList.map((post) => (
                        <PostBox arr={post} key={post.id}/>
                    ))}
                </div>
                {!userSignedIn && <p>Please sign in to view posts</p>}
            </div>
           
            </>
        )
    }
}

export default Dashboard