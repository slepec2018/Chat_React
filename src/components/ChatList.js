import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { addChat } from '../store/chats/actions';



const ChatList = () => {
  const chats = useSelector(state => state.chats.chatList);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [chatName, setChatName] = useState('');


  const handleClose = () => {
    setVisible(false);
  };

  const handleChatName = (e) => {
    setChatName(e.target.value);
  };

  const handleAdd = () => {
    setVisible(true);
  };

  const handleSave = () => {
    dispatch(addChat(chatName));
    handleClose();
    setChatName('');
  };

  return (
    <Box sx={{ width: '20%', bgcolor: 'transparent' }}>
    <nav aria-label="main mailbox folders">
      <List>
          {chats?.length > 0 ? (
            chats.map((element, index) => (
              <ListItem disablePadding key={index}>
                <Link to={`/chats/${element.id}`} className='listLink'>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary={element.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))
          ) : (
              <div>Chats not found</div>
            )
          }  
      </List>
    </nav>
    <Button onClick={handleAdd}>Add chat</Button>
    <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Please enter a name for a new chat.</DialogTitle>
        <TextField
          value={chatName}
          onChange={handleChatName}
          placeholder='Chat name'
        />
        <Button onClick={handleSave}>Save chat.</Button>
    </Dialog>
  </Box>
  )
}

export default ChatList