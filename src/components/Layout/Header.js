import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    border-bottom: 2px solid black;
    width: 100%;
    margin-bottom:50px;
    & h1{
        margin:5px 40px;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
                <h1>Coding Challenge</h1>
        </StyledHeader>
    )
}

export default Header
