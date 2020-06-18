import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from "reactstrap";
import styled from "styled-components";

const SingleBlog = (props) => {
    const [singleblog, setSingleblog] = useState({});


    useEffect(() => {
        const id = props.match.params.id;

        axios
            .get(`https://stem-jet-db.herokuapp.com/api/blogs/${id}`)
            .then(response => {
                setSingleblog(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [props.match.params.id]);

    return singleblog === {} ? (
        <StyledDivTemp>
            <Spinner color="primary" />
        </StyledDivTemp>
    ) : (
            <StyledDiv>
                <div className="cards">
                    <h1>{singleblog.title}</h1>
                    <p>{singleblog.body}</p>
                </div>
            </StyledDiv>

        );
}

export default SingleBlog;

const StyledDivTemp = styled.div`
    margin-top: 30%;
`;

const StyledDiv = styled.div`
    margin: 5% 1% 6% 1%;
    padding-bottom: 50px;
    padding-top: 20px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
    background-color: #F5F5F5;

    h1{
        margin-bottom: 10px;
        text-align:center;
    }

    p{
        padding:5px 10px;
        text-align: left;
    }

    .cards {
        border: 0;
        width: 97%;
        box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.24);
        padding: 1rem;
        cursor: pointer;
        position: relative;
        margin: 1rem auto;
        background-color: #FFFFF0;
    }
}
`;
