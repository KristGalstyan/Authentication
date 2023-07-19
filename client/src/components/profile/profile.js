import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  max-width: 600px;
  min-height: 600px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  background: white;
  border-radius: 20px;
`
export const UserImg = styled.img`
  max-width: 100px;
  height: 170px;
`
export const UserName = styled.p`
  font-size: 23px;
`

export const ListAboutMe = styled.p`
  max-width: 250px;
  min-height: 30px;
  border: 1px solid black;
`
export const List = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const AboutMe = styled.textarea`
  border: 3px solid black;
  max-width: 200px;
  height: 50px;
  resize: none;
`
export const About = styled.div`
  position: relative;
`

export const SaveBtn = styled.img`
  cursor: pointer;
  left: 165px;
  position: absolute;
  max-width: 30px;
`
