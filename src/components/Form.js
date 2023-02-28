import { React, useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/messages/actions";



const Form = ({ chatId }) => {
  const dispatch = useDispatch();
  const authorName = useSelector(state => state.profile.name);
  const allMessages = useSelector(state => state.messages.messageList);
  const messages = allMessages[chatId] || [];
  const inputRef = useRef(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (messages?.length > 0 && messages[messages.length - 1].author !== 'Bot') {
      const newMessage = { author: 'Bot', text: 'Привет друг как дела?' }
      setTimeout(() => {
        dispatch(addMessage(chatId, newMessage));
      }, 2000);
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleAddMessage = () => {
    if (message !== '') {
    const newMessage = { author: authorName, text: message };
    dispatch(addMessage(chatId, newMessage));
      setMessage('');
      inputRef.current?.focus();
    }
  };
    
  return (
    <div className="chatForm">
          <TextField 
            sx={{ width: '60%', marginRight: '15px' }}
            id="outlined-basic"
            label="Message"
            variant="outlined"
            type="text"
            value={message}
            onChange={changeMessage}
            autoFocus
          />
          <Button className="chatButton" variant="contained" endIcon={<SendIcon />} onClick={handleAddMessage}>Send message</Button>
    </div>
  )
}

export default Form