import {createGlobalStyle} from 'styled-components'
import {Colors} from "./variables/colors";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }

  body {
    color: ${Colors.WHITE};
    background-color: ${Colors.DARK};
    font-size: 1.4rem;
  }
  
`
