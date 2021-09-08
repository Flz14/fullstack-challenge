import React from 'react'
import { COLOR_HEX } from '../../constants';
import { Button, StyledSnackbar } from './styles';


const Snackbar = ({ text, hideSnackbar, type }) => {

    return (
        <StyledSnackbar className={'show'} bgcolor={COLOR_HEX[type]} >
            {text}
            <Button onClick={hideSnackbar}>X</Button>
        </StyledSnackbar>
    )
}

export default Snackbar
