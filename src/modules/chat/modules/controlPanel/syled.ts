import styled from "styled-components";
import {sendLoaderAnimation} from "../../../core/style/animations/keyframes";

const Form  = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.6rem;
  padding: 1.6rem;
  background-color: ${props => props.theme.background.lightBlue};
  max-width: 100%;
  overflow: hidden;
`
const Input = styled.div`
  width: 100%;
  max-width: 95%;
  min-height: 2.4rem;
  user-select: text;
  word-break: break-word;
  white-space: pre-wrap;
  max-height: 14.4rem;
  overflow: auto;
  padding: .9rem 1.2rem;
  background-color: ${props => props.theme.background.darkBlue};
  border-radius: .8rem;
  &:focus {
    outline: none;
    &:after {
      content: '';
    }
  }
  &:after {
    content: attr(placeholder);
  }
`
const  Button = styled.button`
  background: none;
  fill: white;
  cursor: pointer;
  line-height: 0;
  padding-bottom: 0.7rem;
`
const Loader = styled.div`
  fill: white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${sendLoaderAnimation} 1s infinite linear reverse;
  line-height: 0;
`
export const StyledControlPanel ={
    Form,
    Input,
    Button,
    Loader
}
