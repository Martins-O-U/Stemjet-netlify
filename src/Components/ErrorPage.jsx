import React from "react";
import styled from "styled-components";

function ErrorPage() {
  return (
    <StyledDiv>
      <div className="box-container animated animatedFadeInUp fadeInUp">
        <h2>Oops! Something went wrong.</h2>
        <p><i>Please check your details and try again!</i></p>
      </div>
    </StyledDiv>
  )
}

export default ErrorPage;

const StyledDiv = styled.div`
height: 100vh;
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
    animation-duration: 0.6s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.6s;
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

.box-container{
    text-align: center;
    margin-top: 22%;
    margin-left: 15%;
    margin-right: 15%; 
    padding: 20px;
    text-align: center;
    box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

    @media only screen and (max-width:900px){
      margin-top: 28%;
    }

    @media only screen and (max-width:750px){
      margin-top: 32%;
    }

    @media only screen and (max-width:600px){
      margin-top: 37%;
    }
`;