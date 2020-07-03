import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import students from "./../images/students.jpg"
import library from "./../images/library.jpg";
import teach from "./../images/mission.jpeg";

export default function Home() {
  return (
    <StyledDiv>
      <div className="animated animatedFadeInUp fadeInUp">
        <div className="home-background">
          <img src={students} alt="Students in class" />
        </div>
        <h2 className="home-wel">Welcome to STEMJets</h2>
        <p className="tagline"><i>Explore. Educate. Empower.</i></p>
        <div className="paragraphs">
          <div className="mission">
            <div className="mission-div">
              <h5><strong>Our Mission</strong></h5>
              <div>Our mission is to foster global competitiveness of students especially in disadvantaged regions towards technological advancement to improve the quality of life, upward mobility and economic
                diversification.<br></br>We will achieve these through AMI:
                <ul>
                  <li>Access</li>
                  <li>Mobility</li>
                  <li>Inclusion</li>
                </ul>
              </div>
            </div>
            <div className="mission-img">
              <img src={teach} alt="Goal-to-impact-knowledge" />
            </div>
          </div>
          <div className="vision">
            <div className="vision-img">
              <img src={library} alt="Library-for-Recognition" />
            </div>
            <div className="vision-div">
              <h5><strong>Our Vision</strong></h5>
              <p>To establish global impact and be recognized as a key stakeholder in the African evolution of science education.</p>
            </div>
          </div>
          <div className="values-join">
            <div className="values">
              <h5><strong>Our Core Values</strong></h5>
              <div>
                <ul>
                  <li>Resilience</li>
                  <li>Open-mindedness</li>
                  <li>Confidence</li>
                </ul>
              </div>
            </div>
            <div className="about-us">
              <p>To know more about us <br></br><span className="hvr-radial-out"> <Link to="/about">Click here!</Link></span></p>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  max-width: 1500px;
  margin-top: 55px;
  height: 100%;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 60px;

  @keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  @-webkit-keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  .animated {
    animation-duration: 0.7s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.7s;
    -webkit-animation-fill-mode: both;
  }

  .animatedFadeInUp {
    opacity: 0;
  }

  .fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
  }

  .hvr-radial-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    background: white;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-radial-out:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098d1;
    border-radius: 100%;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-radial-out:hover,
  .hvr-radial-out:focus,
  .hvr-radial-out:active {
    color: white;
  }
  .hvr-radial-out:hover:before,
  .hvr-radial-out:focus:before,
  .hvr-radial-out:active:before {
    -webkit-transform: scale(2);
    transform: scale(2);
  }

  @media only screen and (max-width:480px){
    margin-top: 10px;
  }
      
  .home-wel{
    text-align: center;
    margin-top: 10px;
    margin-bottom: -2px;
    @media only screen and (max-width:350px){
      font-size: 25px;
    }
  } 

  .tagline{
    text-align: center;
      margin-top: 2px;
      font-size: 14px;
  }
  
  .values-join{
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  
  .values{
    width: 55%;
    padding: 10px;
    margin-left: 3%;
    margin-right: 3%;
    border: #D3D3D3 0.2px solid;
    ul{
      text-align: left;
    }
  }

  .about-us{
    width: 30%;
    padding: 10px;
    margin: 2%;

    a{
      text-decoration: none;
      color: black;
    }
    a:hover{
      color: white;
    }
  }

  span{
      border: 1px solid dodgerblue;
      margin-top: 8px;
      padding: 3px 7px;
      border-radius: 5px;
      cursor: pointer;
  }
  
  .paragraphs{
    width: 90%;
    margin: auto;
    text-align: center;

    .mission{
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 1.5% 1%;
      background-color: #F8F8FF;
      padding: 15px 3px;
  
  
      .mission-div{
        width: 55%;
        text-align: left;
        border:1px solid #A9A9A9;
        border-radius: 10px;
        padding: 5px;
      }
  
      .mission-img{
        width: 42%;
        img{
          object-fit: contain;
          border-radius: 20px;
        }
      }
  
      p{
        font-size: 17px;
      }
      h5{
        text-align: center;
      }
    }

    .vision{
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 1.5% 1%;
      background-color: #F8F8FF;
      padding: 15px 3px;
  
      .vision-div{
        width: 55%;
        text-align: center;
        border:1px solid #A9A9A9;
        border-radius: 10px;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 50px;

      }
  
      .vision-img{
        width: 42%;
        img{
          object-fit: contain;
          border-radius: 20px;
        }
      }
  
      p{
        font-size: 17px;
      }
      h5{
        text-align: center;
      }
    }

    @media only screen and (max-width:550px){
      flex-direction: column;

      .values-join{
        width: 97%;
        margin-left: 2%;
      }
      .mission-vission{
        width: 92%;
        margin-bottom: 15px;
      }
    }
  }

  .home-background {
    height: 280px;
  }
  
  .home-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

