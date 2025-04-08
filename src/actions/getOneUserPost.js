
export default async function getOneUserPosts(formData) {
  let envURL = import.meta.env.VITE_DB_URL
    let postID = formData.get('postID')
    let URL = envURL + "/" + localStorage.getItem('currentUserName') + "/posts/edit/" + postID
    try {
        let post = await fetch(URL, {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('userToken')
          },
          token: localStorage.getItem('userToken')
        })
        if(!post) {
          throw new Error('error gathering info')
        }
        const parsePost = await post.json()
        console.log(parsePost)

        let postArr = parsePost.blogpost      
        localStorage.setItem('post2edit', JSON.stringify(postArr))

        let path = String(window.location.href)
            path = path.replace('/dashboard', '/edit')
            window.location.href = path
        } catch(error) {
            console.log(error.message)
        }
          
        }