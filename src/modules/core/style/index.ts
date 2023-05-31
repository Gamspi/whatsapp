import {createGlobalStyle} from 'styled-components'
import {Colors} from "./variables/colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body, input {
    color: ${Colors.WHITE};
    background-color: ${Colors.DARK};
    font-size: 1.4rem;
  }

  button {
    border: none;
    cursor: pointer;

    &:focus, &:hover {
      border: none;
      outline: none;
    }
  }

  input {
    border: none;
    &:focus {
      outline: none;
    }
    &::placeholder{
      color: inherit;
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.16);
  }

  ::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
  }
`
