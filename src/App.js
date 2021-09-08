import React, { useState } from 'react'
import Container from './components/Layout/Container';
import styled from 'styled-components'
import MyButton from './components/MyButton/MyButton';
import Messages from './components/Messages/Messages';
import { useDispatch } from 'react-redux';
import { deleteAllMessages } from './reducers/messages.reducer';
import usePollMessages from './hooks/usePollMessages';
import SnackbarsContainer from './components/Snackbar/SnackbarsContainer';

const StyledButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    && > *{
        margin:0px 10px;
    }
`;

const App = () => {
    const dispatch = useDispatch();
    const [isStopped, stopPolling] = usePollMessages();

    const handleToggleFetch = () => stopPolling();
    const handleDeleteAll = () => dispatch(deleteAllMessages());

    return (
        <Container>
            <SnackbarsContainer></SnackbarsContainer>
            <StyledButtonsContainer>
                <MyButton label={isStopped ? 'Start' : 'Stop'} bgColor={isStopped ? '#51804f' : '#a1051a'} onClick={handleToggleFetch} />
                <MyButton label="Clear" onClick={handleDeleteAll} />
            </StyledButtonsContainer>
            <div className="message-containers">
                <Messages messageType={1} />
                <Messages messageType={2} />
                <Messages messageType={3} />
            </div>
        </Container>
    )
}

export default App
