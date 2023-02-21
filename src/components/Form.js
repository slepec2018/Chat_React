import React from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';



const Form = ({ addText, addMess, valInp, focus }) => {
    
  return (
    <div className="chatForm">
          <TextField sx={{ width: '60%', marginRight: '15px' }}
          id="outlined-basic" label="Message" variant="outlined" type="text" value={valInp} onChange={addText} autoFocus inputRef={focus} />
          <Button className="chatButton" variant="contained" endIcon={<SendIcon />} onClick={addMess}>Send message</Button>
    </div>
  )
}

export default Form