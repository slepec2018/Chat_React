import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const ChatNav = () => {
  return (
    <ul className='chatNav'>
        <li>
            <Link className='chatNavLink' to={'/'}>
                <Button variant="outlined">Main</Button>
            </Link>
        </li>
        <li>
            <Link className='chatNavLink' to={'/profile'}>
                <Button variant="outlined">Profile</Button>
            </Link>
        </li>
    </ul>
  )
}

export default ChatNav
