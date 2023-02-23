import { Link } from 'react-router-dom';
import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChatIcon from '@mui/icons-material/Chat';



const ChatList = ({ listChat }) => {
  const listId = Object.keys(listChat);

  return (
    <Box sx={{ width: '20%', bgcolor: 'transparent' }}>
    <nav aria-label="main mailbox folders">
      <List>
        {listId.map((element, index) => (
          <ListItem disablePadding key={element}>
              <Link  to={`/chats/${element}`} className='listLink'>
                  <ListItemButton>
                      <ListItemIcon>
                          <ChatIcon />
                      </ListItemIcon>
                      <ListItemText primary={listChat[element].name} />
                  </ListItemButton>
              </Link>
                
            </ListItem>
        ))}
      </List>
    </nav>
  </Box>
  )
}

export default ChatList