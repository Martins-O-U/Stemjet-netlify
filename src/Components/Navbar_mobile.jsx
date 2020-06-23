import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function Nav() {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);

    const handleMenuButton = () => {
        setisSidebarOpen(!isSidebarOpen)
    };
    const autocloseMenu = () => {
        setTimeout(() => {
            setisSidebarOpen(!isSidebarOpen)
        }, 5000)
    }
    return (
        <StyledDiv>
            <div className="menu-button" onClick={handleMenuButton}><FontAwesomeIcon icon={faBars} size="2x" /></div>
            <nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
                <div className="close" onClick={handleMenuButton}><FontAwesomeIcon icon={faTimes} size="1x" id="close-icon" /></div>
                <div className="menu-items">
                    <div className="menu-list" onClick={autocloseMenu}><NavLink to="/">Home</NavLink></div>
                    <div className="menu-list" onClick={autocloseMenu}><NavLink to="/about">About</NavLink></div>
                    <div className="menu-list" onClick={autocloseMenu}><NavLink to="/join">Join Us</NavLink></div>
                    <div className="menu-list" onClick={autocloseMenu}><NavLink to="/blog">Blog</NavLink></div>
                    <div className="menu-list" id="submit" onClick={autocloseMenu}><NavLink to="/submitblog">Submit A Blog</NavLink></div>
                    <div className="menu-list" onClick={autocloseMenu}><NavLink to="/contact">Contact</NavLink></div>
                </div>
            </nav>
        </StyledDiv>

    )
}

export default Nav;

const StyledDiv = styled.div`
position: relative;
display: none;

.menu-button{
    position: relative;
    z-index: 99;
    cursor: pointer;
}
.menu-items{
    padding: 0;
    margin: 0;
    background-color: #282828;
}
a{
    text-decoration: none;
    color: #fff;
    display: flex;
    padding: 10px 16px;
    border-bottom: 1px solid #555;
}

a:hover {
    color: #fff !important;
    background: #696969;
    padding-bottom: 5px;
  }

.nav {
    width: 25vw;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #888;
    position: absolute;
    top: 0;
    z-index: 999;
    background-color: #fff;
    left: -27vw;
    -webkit-transition: left 0.3s ease-in;
    -o-transition: left 0.3s ease-in;
    transition: left 0.3s ease-in;
}
.nav.show{
    left: 0;
}

.close {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 90px;
    align-content: right;
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width:445px){
        padding-left: 80px;
    }
    @media only screen and (max-width:400px){
        padding-left: 70px;
    }
    @media only screen and (max-width:355px){
        padding-left: 80%;
        padding-right: 5px;
    }
    @media only screen and (max-width:320px){
        padding-left: 72%;
        padding-right: 5px;
    }
    @media only screen and (max-width:220px){
        padding-left: 5px;
    }
}

@media only screen and (max-width: 480px){
    display: block;
  }

`