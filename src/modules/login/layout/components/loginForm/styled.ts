import styled from "styled-components";

const Form = styled.form`
    display: grid;
  gap: 1rem
`
const Button = styled.button`
  background: green;
  color: ${props => props.theme.colors.primary};
  padding: .9rem 1.2rem;
  border-radius: .8rem;

`
const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem
`
const Title = styled.h1`

`
const Footer = styled.div`
    display: flex;
  flex-direction: column;
`
export const StyledLoginForm = {
    Body,
    Form,
    Title,
    Footer,
    Button
}
