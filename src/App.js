import React from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Main from "./components/Main";
import API from "./components/API";
import AboutMe from "./components/AboutMe";
import Inclusion from "./components/Inclusion";
import Bootcamp from "./components/Bootcamp";
import Static from "./components/Static";
import Games from "./components/Games";
import Header from "./components/Header"
import Engineering from "./components/Engineering";
import MainBkg
 from "./components/Main_bkg";
 import Gallery from "./components/Gallery";

const App = () =>{
  const location = useLocation();
  return (
    < >
    
    {location.pathname !== '/' && <Header/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="main" element={<Main />} />
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="api" element={<API/>} />
        <Route path="aboutme" element={<AboutMe/>} />
        <Route path="inclusion" element={<Inclusion/>} />
        <Route path="bootcamp" element={<Bootcamp/>} />
        <Route path="static" element={<Static/>} />
        <Route path="games" element={<Games/>} />
        <Route path="engineering" element={<Engineering/>} />
        <Route path="main_bkg" element={<MainBkg/>} />
        <Route path="gallery" element={<Gallery/>} />

    </Routes>

    </>
  );
}
export default App;