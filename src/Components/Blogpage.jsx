import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Spinner } from "reactstrap";


export function Blog(props) {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://stem-jet-db.herokuapp.com/api/blogs")
            .then(res => {
                setData(res.data);
            });
    }, []);

    return data.length === 0 ? (
        <StyledDivTemp>
            <Spinner color="primary" />
        </StyledDivTemp>
    ) : (
            <StyledDiv>
                <h1>Welcome to Stemjet's information hub</h1>
                <InfoDiv>
                    <div className="card-container">
                        <h2>Recent Posts</h2>
                        {data.map(blog => (
                            <div key={blog.id} className="cards" onClick={() => props.history.push(`/singleblog/${blog.id}`)}>
                                <h5>{blog.title}</h5>
                                <p>{blog.body.length > 25 ? (
                                    <span>
                                        {blog.body.slice(0, 150)}...
                                    </span>
                                ) : (
                                        <span>{blog.body}</span>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="popular-post">
                        <h2>Popular Posts</h2>
                        <div className="popular">
                            <h5>Now I love Maths</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti expedita pariatur esse modi voluptate natus debitis,
                        nisi veritatis architecto mollitia laboriosam illo illum in, consectetur libero tenetur! Porro, corrupti dolor.</p>
                        </div>
                        <div className="popular">
                            <h5>Never Say Never</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti expedita pariatur esse modi voluptate natus debitis,
                        nisi veritatis architecto mollitia laboriosam illo illum in, consectetur libero tenetur! Porro, corrupti dolor.</p>
                        </div>
                    </div>
                </InfoDiv>
            </StyledDiv>
        )
}


export default Blog;

const StyledDivTemp = styled.div`
    margin-top: 30%;
    text-align: center;
`;

const StyledDiv = styled.div`
    margin: 5% 1% 10% 1%;
    h1{
        text-align: center;
    }
`;

const InfoDiv = styled.div`
display: flex;
justify-content: space-between;


.card-container{
    margin: 3% 1% 0.1% 1%;
    width: 60%;
    padding-bottom: 50px;
    padding-top: 20px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
    background-color: #F5F5F5;

    h2{
        text-align: center;
    }

    .cards {
        border: 0;
        width: 92%;
        box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.24);
        padding: 1rem;
        cursor: pointer;
        position: relative;
        margin: 1rem auto;
        background-color: #FFFFF0;
        text-align: left;
    }
}
.popular-post{
    width: 35%;
    margin: 3% 1% 0.1% 1%;
    padding-bottom: 50px;
    padding-top: 20px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

    h2{
        margin-bottom: 5%;
        text-align: center;
    }

   .popular{
       margin: 3% 2%;
       padding: 5px;
       border: 1px solid gray;
       border-radius: 5px;
       cursor: pointer;
   }
}
`;