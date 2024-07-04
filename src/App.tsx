import Nav from "./components/nav/Nav"
import data from '../data.json'
import styled from "styled-components"
import { Routes , Route, Navigate } from "react-router-dom"
import Movies from "./pages/movies/Movies"
import Series from "./pages/series/Series"
import Bookmark from "./pages/bookmark/Bookmark"
import Home from "./pages/home/Home"
import { useState } from "react"
import Login from "./pages/login/Login"
import Singup from "./pages/sign up/Singup"
import { MediaItem } from "./types"


function App() {

  const [dataInfo, setDataInfo] = useState<MediaItem[]>(data);
  const [changeInput, setChangeInput] = useState(false)

  return (
    <StyledBox>
     <Nav></Nav>
    <Routes>
      <Route path="/" element = {<Navigate to={"/home"}/>} />
      <Route path="/home" element = {<Home 
      data={dataInfo} 
      setDataInfo={setDataInfo}
      changeInput={changeInput}
      setChangeInput={setChangeInput}
      />} />
      <Route path="/movies" element = {<Movies 
      data={dataInfo} 
      setDataInfo={setDataInfo}
      changeInput={changeInput}
      setChangeInput={setChangeInput}
      />} />
      <Route path="/series" element = {<Series 
      data={dataInfo} 
      setDataInfo={setDataInfo}
      changeInput={changeInput}
      setChangeInput={setChangeInput}
      />} />
      <Route path="/bookmark" element = {<Bookmark 
      data={dataInfo} 
      setDataInfo={setDataInfo}
      changeInput={changeInput}
      setChangeInput={setChangeInput}
      />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/sign" element = {< Singup/>} />
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
