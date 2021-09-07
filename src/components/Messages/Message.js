import React from 'react'
import styled from 'styled-components'
import {COLOR_HEX} from '../../constants'

const StyledContainer = styled.div`
    background-color: ${({bgColor})=>bgColor?bgColor:''};
    width: 25rem;
    height:100px;
    border-radius: 10px;
`;

const StyledInnerLayout = styled.div`
    margin:30px;
    .message{
        position:relative;
        top:0;
        left:0;
    };
    .button{
        position:relative;
        bottom:0%;
        right:0%;
    };
`;


const Message = ({message= "", type=1, ...restProps}) => {
    return (
        <StyledContainer bgColor={COLOR_HEX[type]}>
            <StyledInnerLayout>
            <h4 className="message">Prueba</h4>
            <h4 className="buton">PRUEBA BOTON</h4>
            </StyledInnerLayout>
        </StyledContainer>
    )
}

export default Message
