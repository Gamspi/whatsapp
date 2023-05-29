import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`
const Messages = styled.div`
  flex-grow: 1;
`
const ControlPanel = styled.div`
    grid-column: 1/3;
`
const Contacts = styled.div`
`
export const StyledChatLayout = {
    Messages,
    Contacts,
    Container,
    ControlPanel
}
