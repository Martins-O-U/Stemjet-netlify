import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import aboutImg from "../images/about.jpg";


export default function About() {
  return (
    <StyledPage >
      <div className="animated animatedFadeInUp fadeInUp">
        <header>
          <h1>Our Story</h1>
          <div className="img"><img src={aboutImg} alt="Happy-Kids" /></div>
        </header>
        <StyledParagragph>
          <p className="about-us">
            <span id="stem">S</span>TEMJets offers a platform for schools and parents to provide flexible experiential STEM
                (Science, Technology, Engineering and Mathematics) learning to pre-university students
                through a collaborative and low-cost approach. This platform helps students to develop practical
                skills necessary to aspire and succeed in emerging STEM careers while promoting access,
                mobility and inclusion.The future of work is dynamic and requires a workforce that is as skilled
                as it is knowledgeable.
                </p>
          <p className="Next-path">Our value hypothesis is that an increase in the creativeness of STEM education will lead to an
          increased interest of pre-university students in STEM and promote innovation. The goal of
          STEMJets is to promote technological innovation by revolutionising the delivery model of STEM
          education, complementing traditional schools by facilitating hands-on training exercises,
          mirroring their everyday challenges. We make these fields attractive to today's generation,
          minimise the perception that science is for geniuses and improve their ability to link science to
          societal problem-solving.
                </p>
          <div className="join">
            <p><i>Would you like to help make a difference? </i><span className="join-us hvr-radial-out"><Link to="/join">Join our network</Link></span></p>
            <p><Link to="/" id="back" className="hvr-radial-out"><span><FontAwesomeIcon icon={faLongArrowAltLeft} size="2x" /></span><span>Back to Home page</span></Link></p>
          </div>
        </StyledParagragph>
      </div>
    </StyledPage>
  )
}

const StyledPage = styled.div`
    margin-top: 4.4%;
    text-align: center;

    @media only screen and (max-width:1000px){
        margin-top: 6%;
    }
    @media only screen and (max-width:800px){
        margin-top: 8%;
    }
    @media only screen and (max-width:600px){
        margin-top: 10%;
    }
    @media only screen and (max-width:480px){
        margin-top: 4%;
    }
    header{
        height: 200px;
        background: #FFA500;
        h1{
            margin-bottom: 20px;
        }
        .img{
            margin: auto;
            width: 85%;
            
            @media only screen and (max-width:460px){
                width:90%;
            }
            img{
                width: 100%;
                height: 350px;
                object-fit: cover;
                @media only screen and (max-width:460px){
                    height: 300px;
                }
                @media only screen and (max-width:400px){
                    height: 260px;
                }
            }

        }

    }

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
    
`;

const StyledParagragph = styled.div`
margin-top: 250px;
margin-bottom: 50px;
margin-left: 5%;
margin-right: 5%;
padding: 2px 7px 5px 12px;
text-align: left;
font-weight: 800px;

.join{
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width:650px){
        flex-direction: column;
    }
    p{
        display: flex;
        align-items: baseline;
    }

    a{
        text-decoration: none;
        color: black;
    }
    a:hover{
        color: white;
    }
}

.join-us{
    border: 1px solid dodgerblue;
    margin-top: 8px;
    margin-left: 5px;
    padding: 3px 7px;
    border-radius: 5px;
    cursor: pointer;
  }
  #back{
      display: flex;
      align-items: center;
      justify-content: space-between;
    border: 1px solid dodgerblue;
    margin-top: 8px;
    margin-left: 5px;
    padding: 3px 7px;
    border-radius: 5px;
    cursor: pointer;
    span{
        margin-left: 1px;
        margin-right: 1px;
    }
  }

  #stem{
    font-size: 30px;
}
@media only screen and (max-width:460px){
    margin: 185px 15px 52px 10px;
}
@media only screen and (max-width:400px){
    margin: 150px 15px 52px 10px;
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
`;