import styled from "styled-components";

const Container = styled.div`
  border-bottom: .1rem solid #202c33;
  cursor: pointer;
  transition: background-color .15s linear;
  padding: 1.5rem;

  &:hover {
    background-color: ${props => props.theme.background.darkBlue};
  }
`
const Label = styled.span`
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 2.1rem;`
export const StyledContactItem = {
    Container,
    Label
}
