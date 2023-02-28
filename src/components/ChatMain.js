import ChatList from "./ChatList";
import Message from "./Message";
import Form from "./Form";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ChatMain = () => {
    const chats = useSelector(state => state.chats.chatList);
    const { chatId } = useParams();

    if (chats.length === 0 ) {
        return (
            <div className="chatMain">
                <ChatList />
                <div className='chooseChat'>
                    <p>Для начала общения создайте чат.</p>
                </div>
            </div>
        )
    }

    if (!chatId) {
        return (
            <div className="chatMain">
                <ChatList />
                <div className='chooseChat'>
                    <p>Для начала общения выберите чат.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="chatMain">
            <ChatList />
            <div className='chatField'>
                <Message chatId={chatId} />
                <Form chatId={chatId} />
            </div>
        </div>
    )
}

export default ChatMain
