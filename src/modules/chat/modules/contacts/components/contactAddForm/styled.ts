import styled from "styled-components";

const Button = styled.button`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.button.primary};
  transition: background-color .15s ease-in;
  padding: 1rem;
  border-radius: .8rem;

  &:hover {
    background-color: ${props => props.theme.button.primaryHover};
  }
`
const Container = styled.div`
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 2rem;
`
const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.6);
`
const Body = styled.form`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2rem;
  background-color: ${props => props.theme.background.lightBlue};
  padding: 1rem;
  border-radius: 1rem;
`
export const StyledContactAddForm = {
    Body,
    Button,
    Container,
    Background
}
