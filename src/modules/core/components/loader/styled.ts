import styled from "styled-components";
import {loaderAnimation} from "../../style/animations/keyframes";
import {StyledArgsType} from "./types";

const Container = styled.div<StyledArgsType>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background.black};
  opacity: ${props => props.opacity || 1};
`
const Body = styled.svg`
  stroke: ${props => props.theme.colors.primary};
  fill: ${props => props.theme.colors.primary};
  animation: ${loaderAnimation} 1s infinite linear alternate;
  width: 5rem;
  height: 5rem;
`
export const StyledLoader = {
    Container, Body
}
