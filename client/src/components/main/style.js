import styled from 'styled-components'

export const MainBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  min-height: 650px;
  background: #f8fcfc;
`

export const App = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  color: #333;
`

export const AppHeader = styled.div`
  padding: 40px 0;
  background-color: #222;
  color: #fff;
`

export const AppMain = styled.div`
  padding: 40px 20px;
`

export const HeroSection = styled.div`
  padding: 60px 0;
  background-color: #fff;
`
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
`
export const Button = styled.div`
  max-width: 200px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`

export const AppFooter = styled.div`
  padding: 20px 0;
  background-color: #222;
  color: #fff;
  p {
    margin: 0;
  }
`
