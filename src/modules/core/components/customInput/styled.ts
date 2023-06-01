import styled, {css} from "styled-components";

export const StiledCustomInput = styled.input<{isError?: boolean}>`
  padding: .9rem 1.2rem;
  background-color: ${props => props.theme.background.darkBlue};
  border-radius: .8rem;
  ${props => props.isError && css`
   border: .1rem solid red;
  `}
`
