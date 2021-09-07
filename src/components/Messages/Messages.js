import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { ERROR_TYPE_TEXT, KEYS_MESSAGES } from "../../constants"
import { deleteMessage } from "../../reducers/messages.reducer";
import MessageBox from "./MessageBox"

const StyledMessagesContainer = styled.div`
    width: 25rem;
    display:flex;
    flex-direction:column;
    gap:1rem;
    
    .flex-container{
        margin-top:0px;
        display:flex;
        flex-direction:column;
        align-items: center;
        & > h3,  & > h2 {
            margin: 0.3rem 0px;
        }
    }

    .boxes-container{
        display:flex;
        flex-direction:column-reverse;
        gap:1rem;
    }
`;

const Messages = ({ messageType = 1 }) => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages[KEYS_MESSAGES[messageType]]);

    const renderMessageBoxes = (messages) => {
        return messages.messages.map(message => (
            <MessageBox text={message.text} type={messageType} key={message.id} deleteMessage={() => dispatch(deleteMessage({ id: message.id, type: messageType }))} />
        ))
    }

    return (
        <StyledMessagesContainer>
            <div className="flex-container">
                <h2>
                    {ERROR_TYPE_TEXT[messageType]} Type {messageType}
                </h2>
                <h3>
                    Count{' '} {messages.counter}
                </h3>
            </div>
            <div className="boxes-container">
                {renderMessageBoxes(messages)}
            </div>
        </StyledMessagesContainer>
    )
}

export default Messages
