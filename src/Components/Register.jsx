import React, { useState } from "react"
import axios from "axios";
import styled from "styled-components";

function JoinUs(props) {
    const contact_information = {
        name: '',
        email: '',
        number: '',
        comment: ''
    }

    const [message, setMessage] = useState(contact_information)
    const [button, setButton] = useState(false)
    const [selectAction, setselectAction] = useState(false)

    const handleChange = (e) => {
        e.persist();
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    };

    const changeAction = (e) => {
        if (e.target.value === "Child") {
            setselectAction(true)
        } else if
            (e.target.value === "Parent") {
            setselectAction(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setButton(!button)
        axios
            .post('https://portfolio-martins.herokuapp.com/api/', message)
            .then(res => {
                // props.history.push('/thanks')
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    return (
        <StyledDiv>
            <h1>Join Us</h1>
            <div className=" form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input name="name" type="text" placeholder="Hello, What is your name?" onChange={handleChange} value={message.name} required />
                    </div>
                    <div>
                        <select onClick={changeAction}>
                            <option defaultValue="Selected" >Are you a Parent or a Child? Please Select</option>
                            <option value="Parent" >Parent</option>
                            <option value="Child">Child</option>
                        </select>
                        <div className={`${selectAction ? 'show' : 'hide'}`}>
                            <div id="parent">
                                <div>
                                    <input name="email" placeholder="Your Email" onChange={handleChange} value={message.email} required />
                                </div>
                                <div className="btn-field">
                                    <button type="submit" className="submit hvr-radial-out" disabled={button}>Join WhatsApp Comunity</button>
                                </div>
                            </div>
                        </div>
                        <div className={`${!selectAction ? 'hide' : 'show'}`}>
                            <div id="child">
                                <div>
                                    <input name="email" placeholder="Your Parent's Email" onChange={handleChange} value={message.email} required />
                                </div>
                                <div className="btn-field">
                                    <button type="submit" className="submit hvr-radial-out" disabled={button}>Request Parent's Consent</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </StyledDiv>
    )
}

export default JoinUs;

const StyledDiv = styled.div`
text-align: center;
Margin-top: 5%;
.hide{
  #child{
    display: none;
  }
  #parent{
    display: block;
  }
}
.show{
  #child{
    display: block;
  }
  #parent{
    display: none;
  }
}
span{
  background: #7CFC00;
  font-size: 18px;
  padding:3px 70px;
  margin-top: 7px;
  margin-bottom: 1px;
}

.form-container{
    margin: 4% 15%;
    padding: 30px 30px 5px 30px;
    text-align: center;
    box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

  input{
      width: 70%;
      height: 22px;
      margin: 5px;
  }
  select{
      width: 70%;
      margin: auto;
      height: 22x;
      align-content: center;
  }
  .submit{
    width: 30%;
    margin-bottom: 3%;
    border-radius: 5px;
    padding: 5px 4px;
    cursor: pointer;
    border: 1px solid #2098d1;
    border-radius: 10px;
    font-size: 14.5px;
   }
   .btn-field{
    text-align: left;
    margin-left: 14.5%;
   }
   .hvr-radial-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    // background: #e1e1e1;
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

  @media only screen and (max-width: 850px){
    .form-container{
      margin-top: 10%;
    }
  }
  @media only screen and (max-width: 700px){
    .form-container{
      margin-top: 13%;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
  @media only screen and (max-width: 550px){
    .form-container{
      margin-top: 15.5%;
      padding-right: 10px;
      padding-left: 10px;
    }

      input{
        width: 80%;
      }

      textarea{
        width: 80%
      }
  }
}
`;