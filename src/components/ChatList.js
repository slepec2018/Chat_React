import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChatIcon from '@mui/icons-material/Chat';



const ChatList = ({listChat}) => {
  return (
    <Box sx={{ width: '20%', bgcolor: 'transparent' }}>
    <nav aria-label="main mailbox folders">
      <List>
        {listChat.map((element, index) => (
            <ListItem disablePadding key={element.id}>
                <ListItemButton>
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary={element.name} />
                </ListItemButton>
            </ListItem>
        ))}
      </List>
    </nav>
  </Box>
  )
}

export default ChatList