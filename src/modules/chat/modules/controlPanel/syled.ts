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
  user-select: text;
  word-break: break-word;
  white-space: pre-wrap;
  max-height: 14.4rem;
  overflow: auto;
`
const  Button = styled.button`
  background: none;
  fill: white;
  cursor: pointer;
  line-height: 0;
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
