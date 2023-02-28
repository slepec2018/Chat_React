import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthor } from '../store/profile/actions';

const Profile = () => {
  const { name } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const [valueName, setValueName] = useState(name);

  const changeName = (e) => {
    setValueName(e.target.value);
  };

  const saveName = () => {
    dispatch(updateAuthor(valueName));
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Your name: {name}</p>
      <input
        type='text'
        value={valueName}
        onChange={changeName}
      />
      <button onClick={saveName}>Change name</button>
    </div>
  )
}

export default Profile
