import styled from "styled-components";

const Container = styled.div`
  width: 40rem;
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
const List = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  flex-grow: 1;
`
const AddButton = styled.button`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.button.primary};
  transition: background-color .15s ease-in;
  padding: 1rem;
  
  &:hover {
    background-color: ${props => props.theme.button.primaryHover};
  }
`
export const StyledContactsLayout = {
    List,
    Container,
    AddButton,
}
