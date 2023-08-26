import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: rgb(249, 249, 249);
    height: 100%;
  }

  * {
    box-sizing: border-box;
    list-style: none;
  }

  #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
  }

  .hamburger-active {
    width: 100%;
    height: 100%;
    color: red;
    position: absolute;
    top: 0;
    left: 0;
    background: #d1d1d1;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;

    li + li {
      margin: 30px 0px 0px 0px;    
    }
  }



  .hamburger-inactive {
    display: none;

    @media (min-width: 769px){
      display: flex;

      ul {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
      }
    }
  }

`

export default GlobalStyle