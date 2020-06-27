import React from "react";
import styled from "styled-components";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <StyledNav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item"><a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a></li>
                ))}
            </ul>
        </StyledNav>
    )
}

export default Pagination;

const StyledNav = styled.nav`
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
    }
`;