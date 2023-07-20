import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import SignIn from './components/sign/SignIn'
import SignUp from './components/signUp/SignUp'
import Profile from './components/profile/Profile.jsx'
import Main from './components/main/Main'
import { Button } from './components/main/style'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth, fetchLogout } from './redux/slices/auth.slice'
import { Suspense, useEffect } from 'react'
import { headerButton } from './data/buttons'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation(['home'])
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
            {headerButton.map((elm, i) => {
              return (
                <Link
                  key={elm + i}
                  to={elm.path}
                  style={{
                    textDecorationLine: 'none',
                    borderRadius: '20px',
                    overflow: 'hidden'
                  }}
                >
                  <Button>
                    {i === 0
                      ? t('btnHome')
                      : i === 1
                      ? t('btnSingIn')
                      : i === 2
                      ? t('btnSignUp')
                      : ''}
                  </Button>
                </Link>
              )
            })}
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
              {t('btnLogOut')}
            </Button>
          </div>
        )}
      </div>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
