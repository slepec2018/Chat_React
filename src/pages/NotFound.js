import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <div className='notFound'>
      <p>404! Not found page</p>
      <Link to={'/'}>
        <Button variant="outlined">Main page</Button>
      </Link>
    </div>
  )
}

export default NotFound
