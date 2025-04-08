export default async function editUserPost (formData) {
  let envURL = import.meta.env.VITE_DB_URL
    let postID = JSON.parse(localStorage.getItem('post2edit')).id
    let title = formData.get('editPostTitle')
    let body = formData.get('editPostBody')
    let published = formData.get('editPostPublished')
    if(published) {
        published = true
    } else {
        published = false
    }

    let URL = envURL + "/" + localStorage.getItem('currentUserName') + "/posts/edit/" + postID

    try {
        let post = await fetch(URL, {
          method: "PUT",
          body: JSON.stringify({
            title: title,
            body: body,
            published: published
          }),
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('userToken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          token: localStorage.getItem('userToken')
        })
        if(!post) {
          throw new Error('error gathering info')
        } else {
            const parsePost = await post.json()
            console.log(parsePost)
            let path = String(window.location.href)
                path = path.replace('/edit', '/dashboard')
                window.location.href = path
        }
        } catch(error) {
            console.log(error.message)
        }
          
}