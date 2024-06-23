import Nav from "./components/nav/Nav"
import data from '../data.json'
import Main from "./components/main/Main"
import styled from "styled-components"

function App() {

  return (
    <StyledContainer>
     <Nav></Nav>
     <Main data={data}></Main>
    </StyledContainer>
  )
}


const StyledContainer = styled.div`

  @media only screen and (min-width:1440px){
    display: grid;
    grid-template-columns: 164px 1fr
  }

`



export default App
