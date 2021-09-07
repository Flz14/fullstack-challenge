import React from 'react'
import styled from 'styled-components'
import { COLOR_HEX } from '../../constants'

const StyledContainer = styled.div`
    background-color: ${({ bgColor }) => bgColor ? bgColor : ''};
    width: 25rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledInnerLayout = styled.div`
    margin:30px;
    .message{
        position:relative;
        top:0;
        left:0;
    };
    .button{
        display:inline-block;
        position:relative;
        bottom:0%;
        left:90%;
        margin: 0;
        font-size:1rem;
        cursor:pointer;
        border-radius: 5px;
        padding:5px;
        border: 1px solid black;
        user-select: none;
    };
`;


const MessageBox = ({ text = "", type = 1, deleteMessage = () => { } }) => {
    return (
        <StyledContainer bgColor={COLOR_HEX[type]}>
            <StyledInnerLayout>
                <h4 className="message">{text}</h4>
                <p className="button" onClick={() => deleteMessage()}>Clear</p>
            </StyledInnerLayout>
        </StyledContainer>
    )
}

export default MessageBox
