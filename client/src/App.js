import './App.css'
import OAuth2Login from 'react-simple-oauth2-login'

function App() {
  const onSuccess = async (res) => {
    const accessToken = res.access_token
    const result = await fetch(
      `https://graph.facebook.com/me?fields=id,name,picture&access_token=${accessToken}`
    )
    const profile = await result.json()
    console.log(profile)
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
        scope="public_profile"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export default App
