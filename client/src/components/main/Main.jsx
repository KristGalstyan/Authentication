import React, { useEffect } from 'react'
import {
  App,
  AppFooter,
  AppHeader,
  AppMain,
  Container,
  HeroContent,
  HeroSection,
  MainBlockWrapper
} from './style'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function Main() {
  const { i18n, t } = useTranslation(['home'])
  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en')
    }
  }, [])

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <MainBlockWrapper>
      <App>
        <AppHeader className="app-header">
          <h1>{t('title')}</h1>
          <Container>
            <Container>{t('choose')}</Container>
            <select onChange={(e) => handleLanguageChange(e)}>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="am">Հայերեն</option>
            </select>
          </Container>
        </AppHeader>
        <AppMain>
          <HeroSection>
            <HeroContent>
              <h2>{t('welcome')}</h2>
              <p>{t('text')}</p>
              <img
                src="https://st2.depositphotos.com/3591429/7157/i/600/depositphotos_71573471-stock-photo-man-working-on-computer-with.jpg"
                alt="about"
              />
            </HeroContent>
          </HeroSection>
        </AppMain>
        <AppFooter>
          <p>
            &copy; {new Date().getFullYear()} {t('footer')}
          </p>
        </AppFooter>
      </App>
    </MainBlockWrapper>
  )
}

export default Main
