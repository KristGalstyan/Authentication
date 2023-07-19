import './App.css'
import OAuth2Login from 'react-simple-oauth2-login'

function App() {
  const onSuccess = (res) => {
    console.log(res)
  }

  const onFailure = (res) => {
    console.log(res)
  }

  return (
    <div className="App">
      <OAuth2Login
        buttonText="Login with Facebook"
        authorizationUrl="https://www.facebook.com/dialog/oauth"
        responseType="token"
        clientId="139603582496424"
        redirectUri="http://localhost:3000"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export default App
