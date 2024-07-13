import data from '../data.json';
import styled from "styled-components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Bookmark from "./pages/bookmark/Bookmark";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/sign-up/Singup"
import { MediaItem } from "./types";
import Nav from './components/nav/Nav';

function App() {
  const [dataInfo, setDataInfo] = useState<MediaItem[]>(data);
  const [changeInput, setChangeInput] = useState(false);
  const [hideNav, setHideNav] = useState(true);
  const location = useLocation();

   const toggleBookmark = (index: number) => {
    setDataInfo(prevData => {
      return prevData.map((item, i) => {
        if (i === index) {
          return { ...item, isBookmarked: !item.isBookmarked };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/sign') {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [location]);


  return (
    <StyledBox>
      {hideNav ? null : <Nav />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route 
          path="/home" 
          element={
            <Home 
              data={dataInfo} 
              setDataInfo={setDataInfo}
              changeInput={changeInput}
              setChangeInput={setChangeInput}
              toggleBookmark={toggleBookmark}
            />
          } 
        />
        <Route 
          path="/movies" 
          element={
            <Movies 
              data={dataInfo} 
              setDataInfo={setDataInfo}
              changeInput={changeInput}
              setChangeInput={setChangeInput}
              toggleBookmark={toggleBookmark}
            />
          } 
        />
        <Route 
          path="/series" 
          element={
            <Series 
              data={dataInfo} 
              setDataInfo={setDataInfo}
              changeInput={changeInput}
              setChangeInput={setChangeInput}
              toggleBookmark={toggleBookmark}
            />
          } 
        />
        <Route 
          path="/bookmark" 
          element={
            <Bookmark 
              data={dataInfo} 
              setDataInfo={setDataInfo}
              changeInput={changeInput}
              setChangeInput={setChangeInput}
              toggleBookmark={toggleBookmark}
            />
          } 
        />
        <Route 
          path="/login" 
          element={
            <Login setHideNav={setHideNav} />
          } 
        />
        <Route 
          path="/sign" 
          element={<Signup />} 
        />
      </Routes>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 164px calc(100vw - 164px);
  }
`;

export default App;
