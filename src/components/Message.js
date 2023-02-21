import React from "react"

const Message = ({data}) => {
  return (
    <div className="chatDesk">
      {data.map((element, index) => (
        <div className="message" key={index}>
          <div>{element.name}</div>
          <div>{element.message}</div>
        </div>
      ))}
    </div>
  )
}

export default Message
