import styled, {css} from "styled-components";
import {Colors} from "../../../../../core/style/variables/colors";
import {StyledProps} from "./type";

const Container = styled.div<StyledProps>`
  padding: 1rem 6.3rem;
  display: flex;
  ${props => props.isMain &&
          css`
            justify-content: flex-end;
          ` }
`
const Content = styled.div<StyledProps>`
  padding: .6rem .9rem .8rem .7rem;
  background-color: ${props => props.isMain ? props.theme.messages.main : props.theme.messages.default};
  border-radius: .75rem;
  position: relative;
  max-width: 65%;
  ${props => props.isMain ?
          css`
            border-top-right-radius: 0;
          ` :
          css`
            border-top-left-radius: 0;
          `};
}
  &:before {
    content: '';
    position: absolute;
    top: 0;
    z-index: 100;
    display: block;

    ${props => props.isMain ?
            css`
              right: -.8rem;
              border: .4rem solid transparent;
              border-left: .4rem solid ${props.theme.messages.main};
              border-top: .4rem solid ${props.theme.messages.main};
            ` :
            css`
              left: -.8rem;
              border: .4rem solid transparent;
              border-top: .4rem solid ${props.theme.messages.default};
              border-right: .4rem solid ${props.theme.messages.default};
            `};
  }
`
const Body = styled.div`
  padding-bottom: .8rem;
`
const Footer = styled.div`
  font-size: 1rem;
  color: ${Colors.WHITE};
  opacity: .6;
  text-align: end;
`
export const StyledMessageItem = {
    Body,
    Footer,
    Container,
    Content
}
