import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledDiv>
      <div className="copy-right">
        <p>&copy; 2020 STEMJets</p>
      </div>
      <div className="social-handle">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/stemjets"
          className="twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/stemjets/"
          className="linkdIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:stemjets@gmail.com"
          className="mail"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </StyledDiv>
  );
}


const StyledDiv = styled.div`
  display: flex;
  padding: 2px 3px;
  justify-content: space-evenly;
  margin-top: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  background-color: #E6E6FA;

  a {
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
    color: #2098d1;
  }

  a:hover {
    transform: translateY(-3px);
  }

  .copy-right {
    margin-top: 7px;
  }

  @media only screen and (max-width: 500px){
    a{
      font-size: 13px;
      margin:0 0.7rem;
    }
  }

  @media only screen and (max-width: 370px){
    a{
      margin: 0 0.4rem;
    }
  }
   
  @media only screen and (max-width:500px){
    p{
      font-size: 14px;
      margin-top: 3px;
      margin-botton: 2px;
    }
  }
`;
