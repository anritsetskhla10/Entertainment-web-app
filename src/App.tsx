import Nav from "./components/nav/Nav"
import data from '../data.json'
import styled from "styled-components"
import { Routes , Route, Navigate } from "react-router-dom"
import Movies from "./pages/movies/Movies"
import Series from "./pages/series/Series"
import Bookmark from "./pages/bookmark/Bookmark"
import Home from "./pages/home/Home"


function App() {

  return (
    <StyledBox>
     <Nav></Nav>
    <Routes>
      <Route path="/" element = {<Navigate to={"/home"}/>} />
      <Route path="/home" element = {<Home data={data}/>} />
      <Route path="/movies" element = {<Movies data={data}/>} />
      <Route path="/series" element = {<Series data={data}/>} />
      <Route path="/bookmark" element = {<Bookmark data={data}/>} />
      <Route path="/login" element = {<Bookmark data={data}/>} />
      <Route path="/sign" element = {<Bookmark data={data}/>} />
    </Routes>
    
    </StyledBox>
  )
}


const StyledBox = styled.div`

  @media only screen and (min-width:1440px){
    display: grid;
    grid-template-columns: 164px calc(100vw - 164px);
  }

`



export default App
