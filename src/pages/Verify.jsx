import getCurrentData from "../actions/getCurrentData.js";

function Verify() {
    getCurrentData()
    let verified = localStorage.getItem('currentUserName')
    if(verified) {
        let path = String(window.location.href)
        path = path.replace('/verify', '/dashboard')
        window.location.href = path
    } else {
        setTimeout(() =>{Verify()}, 1000)
    }

    return(
        <>
        <h2>Loading...</h2>
        </>
    )
}

export default Verify