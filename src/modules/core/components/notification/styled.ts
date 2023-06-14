import styled from "styled-components";

export const StyledNotification = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.background.red};
  border-radius: .8rem;
  &.enter {
    opacity: 0;
    transform: translateX(200px);
  }
  &.enter-active {
    opacity: 1;
    transition: opacity 300ms linear, transform 300ms linear;
    transform: translateX( 0);
  }
  &.exit {
    opacity: 1;
    transform: translateX( 0);
  }
  &.exit-active {
    opacity: 0;
    transition: opacity 300ms linear, transform 300ms linear;
    transform: translateX( 200px);
  }
`
