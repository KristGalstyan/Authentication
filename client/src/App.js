import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SignIn from './components/sign/SignIn'
import SignUp from './components/signUp/SignUp'
import Profile from './components/profile/Profile.jsx'
import Main from './components/main/Main'
import { Button } from './components/main/style'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link
            to="/"
            style={{
              textDecorationLine: 'none',
              borderRadius: '20px',
              overflow: 'hidden'
            }}
          >
            <Button>Home</Button>
          </Link>
          <Link
            to="/signUp"
            style={{
              textDecorationLine: 'none',
              overflow: 'hidden',
              borderRadius: '20px'
            }}
          >
            <Button>Sign Up</Button>
          </Link>

          <Link
            to="/signIn"
            style={{
              textDecorationLine: 'none',
              borderRadius: '20px',
              overflow: 'hidden'
            }}
          >
            <Button>Sign In</Button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
