import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    &&& {
      background-color: ${({ bgColor }) => bgColor ? bgColor : '#9c4f4f'};
      color: #ffff;
    }
`
const MyButton = ({ label, type, bgColor = null, ...props }) => {
  return (
    <StyledButton
      variant="contained"
      bgColor={bgColor}
      {...props}
    >
      {label}
    </StyledButton>
  )
}

export default MyButton
