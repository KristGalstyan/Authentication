import './App.css'

import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import SignIn from './components/sign/SignIn'
import SignUp from './components/signUp/SignUp'
import Profile from './components/profile/Profile.jsx'
import Main from './components/main/Main'
import { Button } from './components/main/style'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth, fetchLogout } from './redux/slices/auth.slice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data } = useSelector((state) => state.sign)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [dispatch])

  function logOutHandler() {
    dispatch(fetchLogout(data.email, data.password))
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        return alert('Не удалось выйти!')
      })
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {!data ? (
          <>
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
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              width: '170px'
            }}
          >
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
            <Link to="/profile">
              <img
                src="/img/profile.png"
                alt="user profile"
                style={{ width: '50px' }}
              />
            </Link>

            <Button
              style={{
                textDecorationLine: 'none',
                borderRadius: '20px',
                overflow: 'hidden'
              }}
              onClick={logOutHandler}
            >
              Log Out
            </Button>
          </div>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
