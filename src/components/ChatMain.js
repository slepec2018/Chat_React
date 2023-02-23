import ChatList from "./ChatList";
import Message from "./Message";
import Form from "./Form";
import { useParams } from "react-router-dom";

const ChatMain = ({ chatList, messageList, addTextMessage, addMessage, messageText, inputElement }) => {
    const { chatId } = useParams();

    if (!chatId) {
        return (
            <div className="chatMain">
                <ChatList listChat={chatList} chatId={chatId} />
                <div className='chooseChat'>
                    <p>Для начала общения выберете чат.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="chatMain">
            <ChatList listChat={chatList} chatId={chatId} />
            <div className='chatField'>
                <Message data={messageList} listChat={chatList} chatId={chatId}/>
                <Form addText={addTextMessage} addMess={addMessage} valInp={messageText} focus={inputElement} />
            </div>
        </div>
    )
}

export default ChatMain
