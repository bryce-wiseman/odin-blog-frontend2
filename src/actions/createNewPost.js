
export default async function (formData) {
    let envURL = import.meta.env.VITE_DB_URL
    let postTitle = formData.get('newPostTitle')
    let postBody = formData.get('newPostBody')
    let postAuthor = formData.get('newPostAuthor')

    let URL = envURL + "/new-post/"
    try {
        let createPost = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
                author: postAuthor
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(!createPost) {
          throw new Error('error creating info')
        } else {
            const parsePost = await createPost.json()
            console.log(parsePost)
            let path = String(window.location.href)
            path = path.replace('/new-post', '/dashboard')
            window.location.href = path
        }
        } catch(error) {
            console.log(error.message)
        }
}