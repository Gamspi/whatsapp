import {keyframes} from "styled-components";

export const loaderAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
`

export const sendLoaderAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`
