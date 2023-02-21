import './App.scss';
import Message from './components/Message';
import Form from './components/Form';
import ChatList from './components/ChatList';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([{ id: '1', name: 'MainChat' }, { id: '2', name: 'SecondChat' }, { id: '3', name: 'ThirdChat' }]);

  const inputElement = useRef(null);
  
  const addTextMessage = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('useEffect');
    }, 2000);
  },[messageList]);


  const addMessage = () => {
    inputElement.current?.focus();
    setMessageList([...messageList, { name: 'Anton', message: text }]);
    console.log(messageList);
    setText('');
  };

  return (
    <div className="App">  
      <ChatList listChat={chatList} />
      <div className='chatField'>
        <Message data={messageList} />
        <Form addText={addTextMessage} addMess={addMessage} valInp={text} focus={inputElement} />
      </div>
    </div>
  );
}

export default App;

 