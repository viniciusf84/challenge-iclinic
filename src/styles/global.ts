import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './variables';

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
      
      @media (min-width: ${breakpoints.mobile}px) {
			  padding: 35px 42px;
		  }
    }

    .flex__default {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &.row {
        flex-direction: row;
      }
    }
    
    button {
      font-family: Montserrat, sans-serif;
    }
  }
`;
