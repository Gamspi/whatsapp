import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  max-height: 100vh;
  overflow: hidden;
`
const Body = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const Messages = styled.div`
  overflow: hidden;
  flex-grow: 1;
`
const ControlPanel = styled.div`
`
const Contacts = styled.div`
  height: 100%;
  overflow: hidden;
`
const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledChatLayout = {
    Body,
    Empty,
    Messages,
    Contacts,
    Container,
    ControlPanel
}
