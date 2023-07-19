import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 650px;
  margin-top: 30px;
  background: #F8FCFCa;
`

export const BlockAuth = styled.div`
  width: 700px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const BlockAd = styled.div`
  max-width: 700px;
  position: relative;
`

export const AdText = styled.p`
  max-width: 500px;
  padding: 20px;
  min-height: 435px;
  font-size: 38px;
  font-weight: 700;
  border: 3px solid black;
  position: absolute;
  color: black;
  left: 100px;
  top: 30px;
  border-radius: 46px;
  border: 1px solid rgba(255, 255, 255, 0.52);
  background: rgba(255, 255, 255, 0.21);
  @media (max-width: 500px) {
    left: 10px;
    top: 0px;
  }
  @media (max-width: 400px) {
    font-size: 23px;
  }
`

export const BlockAuthTitle = styled.p`
  color: #000;
  text-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-style: bold;
  font-weight: 700;
  text-transform: uppercase;
`

export const BlockAuthText = styled.p`
  color: #525252;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const BlockAuthInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 600px;
  min-height: ${(props) => (props.width ? `190px` : '130px')};
  margin-bottom: 15px;
`
export const InputAuth = styled.div`
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 30px;
  padding: 10px;
  outline: none;
  border: 0;
  &:hover {
    border: 2px solid dodgerblue;
  }
`

export const AuthInputImg = styled.img`
  padding: 10px;
  color: white;
  width: 40px;
`

export const UnknownUser = styled.img`
  max-width: 100%;
`

export const BlockAuthOther = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 3px dotted black;
`
export const AuthOtherText = styled.div`
  font-size: 20px;
  font-weight: 700;
`

export const AuthOtherSocial = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
`

export const AdWrapper = styled.div`
  max-width: 100%;
`

export const AdImg = styled.img`
  max-width: 100%;
`

export const BlockAuthButton = styled.button`
  appearance: none;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 200px;
  min-height: 50px;
  font-family: Clarkson, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  &:before {
    animation: opacityFallbackOut 0.5s step-end forwards;
    backface-visibility: hidden;
    background-color: blue;
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
  }
  &:hover:before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }
  &:after {
    background-color: #ffffff;
  }
  span {
    z-index: 1;
    position: relative;
  }
`
