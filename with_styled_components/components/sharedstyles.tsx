import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  color: #f7d494;
  background-color: #545454;
  padding: 0px 10px;
  height: 100%;

  `

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const NavBarStyle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavLinks = styled.div`
  width: 50%;

`

const Hamburgermenu = styled.div`
position: absolute;
top: 20px;
right: 20px;

@media (min-width: 768px){
display: none;
}

`


export { Wrapper, Container, Main, Hamburgermenu, NavBarStyle, NavLinks}