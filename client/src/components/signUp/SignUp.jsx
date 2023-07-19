import React from 'react'
import OAuth2Login from 'react-simple-oauth2-login'
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
} from '../sign/styles'
import { $api } from '../../axios'

function SignUp() {
  const onSuccess = async (res) => {
    const accessToken = res.access_token
    const result = await fetch(
      `https://graph.facebook.com/me?fields=id,name,picture.type(large)&access_token=${accessToken}`
    )
    const profile = await result.json()
    const { id, name } = profile
    const avatar = profile.picture.data.url
    const callAPI = await $api.post('/auth/fb', {
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
          <BlockAuthTitle>Sign Up</BlockAuthTitle>
          <UnknownUser src="img/unknown.png"></UnknownUser>
          <BlockAuthText>
            How to i get started lorem ipsum dolor at?
          </BlockAuthText>
          <BlockAuthInputWrapper width>
            <InputAuth>
              <AuthInputImg src="/img/user.png" alt="user" />
              <Input type="text" placeholder="User Name" name="name" />
            </InputAuth>
            <InputAuth>
              <AuthInputImg src="/img/email.png" alt="user" />
              <Input type="email" placeholder="Email" name="email" />
            </InputAuth>
            <InputAuth>
              <AuthInputImg src="/img/padlock.png" alt="user" />
              <Input type="password" placeholder="Password" name="password" />
            </InputAuth>
          </BlockAuthInputWrapper>
          <BlockAuthButton>
            <span>Sign Up Now</span>
          </BlockAuthButton>
          <BlockAuthOther>
            <AuthOtherText>Login with Other</AuthOtherText>
            <AuthOtherSocial>
              <AuthInputImg
                src="/img/facebook.png"
                alt="facebook"
                style={{ width: '25px' }}
              />
              <OAuth2Login
                buttonText="SignUp with Facebook"
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
              for you SignUp Now!!!
            </AdText>
            <AdImg
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
              alt="woman"
            />
          </AdWrapper>
        </BlockAd>
      </HomeWrapper>
    </>
  )
}

export default SignUp
