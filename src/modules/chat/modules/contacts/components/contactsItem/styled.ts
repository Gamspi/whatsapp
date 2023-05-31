import styled from "styled-components";

const Container = styled.div`
  border-bottom: .1rem solid #202c33;
  cursor: pointer;
  transition: background-color .15s linear;
  padding: 1.5rem 2.5rem 1.5rem 1.5rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${props => props.theme.background.darkBlue};
  }
`
const Label = styled.span`
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 2.1rem;`
const Count = styled.div`
  position: absolute;
  top: .8rem;
  right: .8rem;
  padding: .5rem;
  background-color: ${props => props.theme.background.red};
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-size: 1.3rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const StyledContactItem = {
    Label,
    Count,
    Container
}
