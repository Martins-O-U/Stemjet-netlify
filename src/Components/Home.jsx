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
                  <li className="animated fadeInRight">Resilience</li>
                  <li className="animated fadeInRight">Open-mindedness</li>
                  <li className="animated fadeInRight">Confidence</li>
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
  margin-bottom: 50px;

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

  #H1-name{
    margin-top: -5px;
  }
  #H1-name2{
    margin-bottom: 3px;
  }
  @-webkit-keyframes fadeInRight {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
    animation-duration: 1.5s;
    animation-delay: 0.5s;
  }
  
  @-webkit-keyframes fadeInRightBig {
    from {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInRightBig {
    from {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .fadeInRightBig {
    -webkit-animation-name: fadeInRightBig;
    animation-name: fadeInRightBig;
    animation-duration: 1.5s;
    animation-delay: 0.5s;
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

  .home-background {
    height: 280px;
  }
  
  .home-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .paragraphs{
    width: 90%;
    margin: auto;
    text-align: center;
    padding-bottom: 20px;
    font-weight: 800px;

    .mission{
      display: flex;
      margin: auto;
      justify-content: space-between;
      width: 90%;
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
          object-fit: cover;
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
      margin: auto;
      padding: 15px 3px;
  
      .vision-div{
        width: 45%;
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
          object-fit: cover;
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

    .values-join{
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
    
    .values{
      width: 55%;
      padding: 10px;
      border:1px solid #A9A9A9;
      border-radius: 10px;
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

    @media only screen and (max-width: 1050px){
      .mission-img{
        width: 42%;
        img{
          width:110%;
        }
      }
    }

    @media only screen and (max-width: 935px){
        
      .vision-img{
        width: 44%;
        img{
          width: 100%;
        }
      }        
    }

    @media only screen and (max-width: 830px){
              
      .vision-img{
        width: 45%;
        img{
          width: 120%;
        }
      }

      .mission-img{
        width: 40%;
          img{
            width: 115%;
            height: 100%
          }
        }
    }

    @media only screen and (max-width: 700px){                 
      .mission-img{
        img{
          height: 90%
        }
      }

    }

    @media only screen and (max-width: 650px){                 
      .mission-img{
        img{
          width: 112%;
          height: 80%
        }
      }

    }

    @media only screen and (max-width:600px){

      .mission{
        .mission-div{
          width: 96%;
        }
        .mission-img{
          display: none;
        }
      }

      .vision{
        .vision-div{
          width: 96%;
          padding-top:20px;
        }
        .vision-img{
          display: none;
        }
      }

      .values-join{
        display: flex;
        flex-direction: column;
      }
      
      .values{
        width: 95%;
      }
    
      .about-us{
        width: 95%;
      }
    }
  }
`;

