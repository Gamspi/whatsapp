import styled from "styled-components";
import whtsappBackgrond from './assets/whtsappBackgrond.png'

export const StyledMessages = styled.div`
  position: relative;
  background-color: ${props => props.theme.background.black};
  width: 100%;
  height: 100%;

  &:before{
    content: '';
    background-image: url(${whtsappBackgrond});
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .1;
  }
`
