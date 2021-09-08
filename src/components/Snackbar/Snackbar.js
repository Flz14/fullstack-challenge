import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components'


const fadein = keyframes`
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 1rem;
      opacity: 1;
    }
`;

const fadeout = keyframes`
    from {
      top: 1rem;
      opacity: 1;
    }
    to {
      top: 0;
      opacity: 0;
    }
`;


const StyledSnackbar = styled.div`
    display:flex;
    flex-direction:row;
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    right: 10%; /* Center the snackbar */
    top: 1rem; /* 30px from the bottom */
    
    &.show{
        visibility: visible;
        animation: ${fadein} 0.5s, ${fadeout} 0.5s 2s;
        animation-fill-mode: forwards
    }
    &.hide{
        visibility: hidden;
    }
`;

const Button = styled.button`
  display: flex;
  margin-left:auto;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 1.75rem;
  width: 1.75rem;
  text-align: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: hsl(200, 100%, 60%);
  }
`;

const Snackbar = ({text, hideSnackbar}) => {

    return (
        <StyledSnackbar className={'show '}>
            {text}
            <Button onClick={hideSnackbar}>X</Button>
        </StyledSnackbar>
    )
}

export default Snackbar
