import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/App.css'
import SignupPage from './Signup.jsx'
import LoginPage from './Login.jsx'
import NewPostPage from './NewPost.jsx'
import Dashboard from './Dashboard.jsx'
import VerifyPage from './Verify.jsx'
import EditPost from './EditPost.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/verify' element={<VerifyPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/new-post' element={<NewPostPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/edit' element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
