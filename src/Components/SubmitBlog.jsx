import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Alert } from "reactstrap";


function SubmitBlog(props) {
    const information = {
        title: '',
        body: '',
    }

    const [words, setWords] = useState(information)
    const [button, setButton] = useState(true)
    const [submitAction, setsubmitAction] = useState(false)


    const handleChange = (event) => {
        event.persist();
        setWords({
            ...words,
            [event.target.name]: event.target.value
        })
        if (words.title.length && words.body.length === 0) {
            setButton(true)
        } else {
            setButton(false)
        }

    };
    const switchPage = () => {
        setTimeout(() => {
            props.history.push('/blog')
        }, 1000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setsubmitAction(!submitAction)
        axios
            .post("https://stem-jet-db.herokuapp.com/api/blogs/", words)
            .then(res => {
                switchPage()
            })
            .catch(error => {
                console.log(error.message)
            })
    };
    return (
        <StyledDivSubmit>
            <div className="animated animatedFadeInUp fadeInUp">
                <h1>Write A Blog Post</h1>
                <div className={`${submitAction ? 'show' : 'hide'}`}>
                    <Alert color="success">
                        Submitting your blog post...!
                </Alert>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        <input id="title" type="text" placeholder="Title" onChange={handleChange} name="title" value={words.title} autoFocus required />
                    </label>

                    <label htmlFor="story">
                        <textarea placeholder="Write your message..." onChange={handleChange} name="body" value={words.body} required />
                    </label>
                    <div className="btn-field">
                        <button type="submit" className="submit hvr-radial-out" disabled={button}>Submit</button>
                    </div>
                </form>
            </div>
        </StyledDivSubmit>
    )
}
export default SubmitBlog;

const StyledDivSubmit = styled.div`
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

    margin: 6% 2% 5% 2%;
    @media only screen and (max-width:900px){
        margin-top: 7%;
    }
    @media only screen and (max-width:900px){
        margin-top: 9%;
    }
    @media only screen and (max-width:550px){
        margin-top: 11%;
    }
    @media only screen and (max-width:480px){
        margin-top: 5%;
    }
    @media only screen and (max-width:360px){
        margin-bottom: 20%;
    }
    h1{
        text-align: center;
        @media only screen and (max-width:400px){
            font-size: 32px;
        }
    }

    .hide{
        display: none;
    }
    .show{
        display: block;
    }

    label {
        display: flex;
        flex-direction: column;
        width: 100%; 
        margin-bottom: 1.3rem;

        input {
            outline: none;
            border: none;
            font-size: 40px;
            background: transparent;
            width: 93%;

            &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 40px;
            }
            &::-moz-placeholder { /* Firefox 19+ */
                font-size: 40px;

            }
            &:-ms-input-placeholder { /* IE 10+ */
                font-size: 40px;

            }
            &:-moz-placeholder { /* Firefox 18- */
                font-size: 40px;

            }
        }

        textarea {
            outline: none;
            border: none;
            resize: none;
            font-size: 17px;
            background: transparent;
            line-height: 1.58;
            width: 93%;
            height: 300px;

            &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 17px;
            }
            &::-moz-placeholder { /* Firefox 19+ */
                font-size: 17px;               
            }
            &:-ms-input-placeholder { /* IE 10+ */
                font-size: 17px;
            }
            &:-moz-placeholder { /* Firefox 18- */
                font-size: 17px;
            }

            @media only screen and (max-width:360px){
                height: 250px;
            }
        }
    }
    .submit{
    width: 75px;
    border-radius: 5px;
    padding: 5px 4px;
    cursor: pointer;
    border: 1px solid #2098d1;
    border-radius: 10px;
    font-size: 14.5px;
    }
    .btn-field{
    text-align: left;
    margin-left: 3%;
    margin-bottom: 3%;
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