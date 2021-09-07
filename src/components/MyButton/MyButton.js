import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
 /*  &&&{
    background-color: blue;
  } */
`
const MyButton = ({label, type, ...props}) => {
    return (
        <StyledButton
        variant="contained"
        {...props}
      >
        {label}
      </StyledButton>
    )
}

export default MyButton
