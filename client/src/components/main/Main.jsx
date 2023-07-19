import React from 'react'
import {
  App,
  AppFooter,
  AppHeader,
  AppMain,
  Button,
  HeroContent,
  HeroSection,
  MainBlockWrapper
} from './style'

function Main() {
  return (
    <MainBlockWrapper>
      <App>
        <AppHeader className="app-header">
          <h1>My Authentication Site</h1>
        </AppHeader>
        <AppMain>
          <HeroSection>
            <HeroContent>
              <h2>Welcome</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus sit amet nunc sit amet velit consectetur eleifend.
                Etiam mattis est nec neque eleifend, vel ultrices justo dictum.
              </p>
              <img
                src="https://st2.depositphotos.com/3591429/7157/i/600/depositphotos_71573471-stock-photo-man-working-on-computer-with.jpg"
                alt="about"
              />
            </HeroContent>
          </HeroSection>
        </AppMain>
        <AppFooter>
          <p>
            &copy; {new Date().getFullYear()} My Authentication Website. All
            rights reserved.
          </p>
        </AppFooter>
      </App>
    </MainBlockWrapper>
  )
}

export default Main
