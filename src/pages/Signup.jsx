import signupUser from "../actions/signupUser"
import Disclaimer from "./Disclaimer.jsx"
import Header from "./Header.jsx"

function SignupPage() {

    return(
        <>
        <Header />
        <Disclaimer />
        <div className="main-section">
            <form action={signupUser}>
                <label htmlFor="emailSignup">Email: </label>
                <input type="email" name="emailSignup" id="emailSignup" required/>
                <br />
                <label htmlFor="usernameSignup">Username: </label>
                <input type="text" name="usernameSignup" id="usernameSignup" required/>
                <br />
                <label htmlFor="passwordSignup">Password: </label>
                <input type="password" name="passwordSignup" id="passwordSignup" required/>
                <button type="submit">Sign Up</button>
            </form>

            <button name="signinReRoute" id="signinReRoute" onClick={() => {
                let path = String(window.location.href)
                path = path.replace('/sign-up', '/')
               window.location.href = path
            }}>Back to Sign In</button>
        </div>
        </>
    )
}

export default SignupPage