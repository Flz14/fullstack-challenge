import styled from "styled-components"
import { ERROR_TYPE_TEXT } from "../../constants"
import Message from "./Message"

const StyledMessagesContainer = styled.div`
    width: 25rem;
`;
const Messages = ({messages = [], messageType=1}) => {
    return (
    <StyledMessagesContainer>
        {ERROR_TYPE_TEXT[messageType]} Type {messageType}
        {messages.map(message=>(
            <Message text={message.text}/>
        ))}
        <Message/>
        <Message/>
        <Message/>
    </StyledMessagesContainer>
    )
}

export default Messages
