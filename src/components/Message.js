import React from "react"
import { useSelector } from "react-redux";

const Message = ({ chatId }) => {
  const allMessages = useSelector(state => state.messages.messageList)
  const actualList = allMessages[chatId] || [];

  return (
    <div className="chatDesk">
      {actualList.length > 0 ? (
        actualList.map((element) => (
          <div className="message" key={element.id}>
            <div>{element.author}</div>
            <div>{element.text}</div>
          </div>
        ))
      ) : (
        <div className='chooseChat'>
            <p>Сообщений нет.</p>
        </div>
      )
    }
    </div>
  )
}

export default Message
