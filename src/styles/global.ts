import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
    font: 16px Montserrat, sans-serif;
  }

  #root {
    > section {    
      height: 100%;       
      padding: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    
    button {
      font-family: Montserrat, sans-serif;
    }
  }
`;
