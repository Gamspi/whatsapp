import styled from "styled-components";
import whtsappBackgrond from '../assets/whtsappBackgrond.png'

const Header = styled.div`
  background-color: ${props => props.theme.background.lightBlue};
  z-index: 1;
  position: relative;
  padding: 1rem 1.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.1rem;
  flex-shrink: 0;
`
const Container = styled.div`
  position: relative;
  background-color: ${props => props.theme.background.black};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:before {
    content: '';
    background-image: url(${whtsappBackgrond});
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .1;
  }
`
const List = styled.div`
  flex-grow: 1;
  overflow: hidden;
`

export const StyledMessages = {
    List,
    Header,
    Container
}
