import React from "react"

const Message = ({ listChat, chatId }) => {
  
  const actualList = listChat[chatId].messages;

  return (
    <div className="chatDesk">
      {actualList.map((element, index) => (
        <div className="message" key={index}>
          <div>{element.author}</div>
          <div>{element.text}</div>
        </div>
      ))}
    </div>
  )
}

export default Message
