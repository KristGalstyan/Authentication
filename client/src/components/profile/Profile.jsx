import React from 'react'
import {
  About,
  AboutMe,
  List,
  ListAboutMe,
  ProfileWrapper,
  SaveBtn,
  UserImg,
  UserName
} from './profile'
import { BlockAuthButton } from '../sign/styles'

function Profile() {
  return (
    <>
      <div style={{ position: 'absolute', top: '50px', right: '500px' }}>
        <BlockAuthButton>
          <span>Log Out</span>
        </BlockAuthButton>
      </div>
      <ProfileWrapper>
        <UserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlSdPlC4NmToI9yullNIXNb-voI9An-tN4414hn6g28zwTdlWJbJWHonHJ7SG-6bfDt10&usqp=CAU" />
        <UserName>Krist</UserName>
        <List>
          <ListAboutMe>dsaas</ListAboutMe>
        </List>
        <About>
          <AboutMe placeholder="Write Something "></AboutMe>
          <SaveBtn src="/img/add.png" />
        </About>
      </ProfileWrapper>
    </>
  )
}

export default Profile
