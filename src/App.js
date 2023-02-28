import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import ChatNav from './components/ChatNav';
import ChatMain from './components/ChatMain';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound'
import { useState, useEffect, useRef } from 'react';
  

function App() {
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);

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
    <BrowserRouter>
      <div className="App">
        <ChatNav />
        <Routes>
          <Route
            path='/'
            element={
              <ChatMain />
            }
          />
          <Route path='/profile' element={<Profile />} />
          <Route
            path='/chats/:chatId'
            element={
              <ChatMain />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

 