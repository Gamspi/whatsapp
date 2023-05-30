import styled from "styled-components";
import {StyledProps} from "./type";

const Track = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 10px;
  background-color: white;
`
const Tumb = styled.div<StyledProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${props => props.tumbHeight}%;
  background-color: red;
`

export const StyledCustomBar = {
    Track,
    Tumb
}
