import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import styled from "styled-components"
import Home from './Components/Home';
import About from './Components/About';
import JoinUs from './Components/Register';
import Footer from './Components/FooterNav';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import NavMobile from './Components/Navbar_mobile';
import Thanks from './Components/Thanks';
import ErrorPage from './Components/ErrorPage';
import Registered from './Components/Registered';
import backgroundPix from "./images/download.png";



function App() {
  return (
    <StyledDiv>
      <div className="App">
        <Navbar />
        <NavMobile />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/join" component={JoinUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/error" component={ErrorPage} />
        <Route path="/registered" component={Registered} />
        <Footer />
      </div>
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
background-image: url(${backgroundPix});
`;
