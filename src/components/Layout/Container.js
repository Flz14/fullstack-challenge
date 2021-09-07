import React from 'react'
import styled from 'styled-components'
import Message from '../Messages/Message';
import Messages from '../Messages/Messages';
import MyButton from '../MyButton/MyButton';
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

const StyledButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    && > *{
        margin:0px 10px;
    }
`;


const Container = () => {
    return (
        <StyledContainer>
            <Header/>
            <StyledButtonsContainer>
                <MyButton label="stop"/>
                <MyButton label="clear"/>
            </StyledButtonsContainer>
            <div className="message-containers">
              {/*   <Message/>
                <Message/>
                <Message/> */}
                <Messages/>
                <Messages/>
                <Messages/>
            </div>
        </StyledContainer>
    )
}

export default Container
