import React, {useContext} from 'react'
import Logo from '../../assets/imgs/Logo'

import { AuthContext } from '../../context/auth'

import {Base} from './styles'

const Header = () => {
  const { logout } = useContext(AuthContext);

  function handleLogout(){
    logout()
  }

  return (
    <Base>
      <Logo />
      <a 
        href="/login"
        onClick={handleLogout}
      >Sair</a>
    </Base>
  )
}

export default Header