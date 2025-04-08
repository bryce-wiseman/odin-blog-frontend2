
export default async function (formData) {
  let envURL = import.meta.env.VITE_DB_URL
    let username = formData.get('usernameLogin')
    let password = formData.get('passwordLogin')

    let URL = envURL + "/log-in/author"
    try {
        let findUser = await fetch(URL, {
          method: "POST",
          body: JSON.stringify({
              username: username,
              password: password
          }),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
        })
        if(!findUser) {
          throw new Error('error gathering info')
        }
        const parseUser = await findUser.json()
        console.log(parseUser)
        if(parseUser.message) {
          alert(parseUser.message)
        } else {
          localStorage.setItem('userToken', parseUser.token)
          window.location.href = window.location.href + 'verify'
        }
        } catch(error) {
            console.log(error.message)
        }
}