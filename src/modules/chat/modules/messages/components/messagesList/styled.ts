import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`
export const StyledMessageList = {
    Content,
    Container
}
