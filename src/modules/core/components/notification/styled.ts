import styled from "styled-components";

export const StyledNotification = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.background.red};
  border-radius: .8rem;
`
