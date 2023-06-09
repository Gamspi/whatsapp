import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 3rem 0;
`
const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  min-height: 100%;
  min-width: 40rem;
`
export const StyledMessageList = {
    Content,
    Container
}
