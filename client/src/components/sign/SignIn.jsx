import React from 'react'
import OAuth2Login from 'react-simple-oauth2-login'
import axios from 'axios'
import {
  HomeWrapper,
  BlockAuth,
  BlockAuthText,
  BlockAd,
  BlockAuthTitle,
  BlockAuthInputWrapper,
  AuthInputImg,
  Input,
  InputAuth,
  BlockAuthButton,
  UnknownUser,
  BlockAuthOther,
  AuthOtherText,
  AuthOtherSocial,
  AdImg,
  AdWrapper,
  AdText
} from './styles.js'

function SignIn() {
  const onSuccess = async (res) => {
    const accessToken = res.access_token
    const result = await fetch(
      `https://graph.facebook.com/me?fields=id,name,picture.type(large)&access_token=${accessToken}`
    )
    const profile = await result.json()
    const { id, name } = profile
    const avatar = profile.picture.data.url
    const callAPI = await axios.post('http://localhost:4444/api/auth/fb', {
      id,
      name,
      avatar
    })
    console.log(callAPI)
  }

  const onFailure = (res) => {
    console.log(res)
  }
  return (
    <>
      <HomeWrapper>
        <BlockAuth>
          <BlockAuthTitle>Sign In</BlockAuthTitle>
          <UnknownUser src="img/unknown.png"></UnknownUser>
          <BlockAuthText>
            How to i get started lorem ipsum dolor at?
          </BlockAuthText>

          <BlockAuthInputWrapper>
            <InputAuth>
              <AuthInputImg src="/img/email.png" alt="user" />
              <Input type="text" placeholder="Email" name="name" />
            </InputAuth>
            <InputAuth>
              <AuthInputImg src="/img/padlock.png" alt="user" />
              <Input type="text" placeholder="Password" name="name" />
            </InputAuth>
          </BlockAuthInputWrapper>
          <BlockAuthButton>
            <span>Sign In Now</span>
          </BlockAuthButton>
          <BlockAuthOther>
            <AuthOtherText>SignIn with Other</AuthOtherText>
            <AuthOtherSocial>
              <AuthInputImg
                src="/img/facebook.png"
                alt="facebook"
                style={{ width: '25px' }}
              />
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
            </AuthOtherSocial>
          </BlockAuthOther>
        </BlockAuth>
        <BlockAd style={{ backgroundImage: 'url("/img/background.png")' }}>
          <AdWrapper>
            <AdText>
              Very good works
              <br /> are waiting <br />
              for you SignIn Now!!!
            </AdText>
            <AdImg src="/img/woman.png" alt="woman" />
          </AdWrapper>
        </BlockAd>
      </HomeWrapper>
    </>
  )
}

export default SignIn
