import loginUser from '../actions/loginUser.js'
import Header from './Header.jsx'

function LoginPage() {

    let userToken = localStorage.getItem('userToken')
    if (userToken) {
        window.location.href = window.location.href + 'dashboard'
    }

    return(
        <>
        <Header />
        <div className='main-section'>
            <div className='signin-sect'>
                <form action={loginUser}>
                    <label htmlFor="usernameLogin">Username: </label>
                    <input type="text" name="usernameLogin" id="usernameLogin" required/>
                    <br />
                    <label htmlFor="passwordLogin">Password: </label>
                    <input type="password" name="passwordLogin" id="passwordLogin" required/>
                    <br />
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className='signup-sect'>
                <label htmlFor="signupReRoute">Don't have an account?</label>
                <br />
                <button name="signupReRoute" id="signupReRoute" onClick={() => {
                window.location.href = window.location.href + 'sign-up'
                }}>Sign Up</button>
            </div>
        </div>
        </>
    )
}

export default LoginPage