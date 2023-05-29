import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Messages = styled.div`
  flex-grow: 1;
`
const ControlPanel = styled.div`

`
export const StyledChatLayout = {
    Container,
    Messages,
    ControlPanel
}
