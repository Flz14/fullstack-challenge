import React from 'react'
import styled from 'styled-components'
import Header from './Header';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .message-containers{
        margin: 100px 0;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 5rem;
    }
`;



const Container = ({ children }) => {
    return (
        <StyledContainer>
            <Header />
            {children}
        </StyledContainer>
    )
}

export default Container
