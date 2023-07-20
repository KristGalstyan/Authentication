import React from 'react'
import { useNavigate } from 'react-router-dom'
import OAuth2Login from 'react-simple-oauth2-login'
import { useDispatch } from 'react-redux'
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
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { fetchLogin, fetchSocial } from '../../redux/slices/auth.slice.js'

function SignIn() {
  const { t } = useTranslation(['signIn'])

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'all'
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signSubmit = (values) => {
    dispatch(fetchLogin(values))
      .then(() => {
        navigate('/profile')
      })
      .catch(() => {
        return alert('Не удалось авторизоваться!')
      })
    reset()
  }

  const onSuccess = async (res) => {
    const accessToken = res.access_token
    const result = await fetch(
      `https://graph.facebook.com/me?fields=id,name,picture.type(large)&access_token=${accessToken}`
    )
    const profile = await result.json()
    const { id, name } = profile
    const avatar = profile.picture.data.url
    const callAPI = dispatch(fetchSocial({ id, name, avatar }))
    navigate('/profile')
    return callAPI
  }

  const onFailure = (res) => {
    console.log(res)
  }
  return (
    <>
      <HomeWrapper>
        <BlockAuth>
          <BlockAuthTitle>{t('sign')}</BlockAuthTitle>
          <UnknownUser src="img/unknown.png"></UnknownUser>
          <BlockAuthText>{t('text')}</BlockAuthText>

          <form onSubmit={handleSubmit(signSubmit)}>
            <BlockAuthInputWrapper>
              <InputAuth
                style={
                  !!errors.email?.message
                    ? { border: '2px solid red' }
                    : { border: '3px solid black' }
                }
              >
                <AuthInputImg src="/img/email.png" alt="user" />
                <Input
                  {...register('email', { required: 'Укажите E-Mail' })}
                  type="email"
                  placeholder={errors.email?.message}
                  name="email"
                />
              </InputAuth>
              <InputAuth
                style={
                  !!errors.password?.message
                    ? { border: '2px solid red' }
                    : { border: '3px solid black' }
                }
              >
                <AuthInputImg src="/img/padlock.png" alt="user" />
                <Input
                  {...register('password', { required: 'Укажите Password' })}
                  type="password"
                  placeholder={errors.password?.message}
                  name="password"
                />
              </InputAuth>
            </BlockAuthInputWrapper>
            <BlockAuthButton
              disabled={!isValid}
              style={
                !isValid ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
              }
            >
              <span>{t('btnSubmit')}</span>
            </BlockAuthButton>
          </form>
          <BlockAuthOther>
            <AuthOtherText>{t('signOther')}</AuthOtherText>
            <AuthOtherSocial>
              <AuthInputImg
                src="/img/facebook.png"
                alt="facebook"
                style={{ width: '25px' }}
              />
              <OAuth2Login
                buttonText={t('btnText')}
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
            <AdText>{t('ad')}</AdText>
            <AdImg src="/img/woman.png" alt="woman" />
          </AdWrapper>
        </BlockAd>
      </HomeWrapper>
    </>
  )
}

export default SignIn
