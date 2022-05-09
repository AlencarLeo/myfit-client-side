import React, {useContext} from 'react'

import { AuthContext } from '../../context/auth';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  console.log(user);

  return (
    <div>Home - Olá {user.email}</div>
  )
}

export default Home