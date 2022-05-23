import React, {useContext} from 'react'
import Logo from '../assets/imgs/Logo'

import { AuthContext } from '../context/auth'

import {StyledHeader} from './styles/Header.styled'
import {LinkButton} from './styles/LinkButton.styled'

const Header = () => {
  const { logout } = useContext(AuthContext);

  function handleLogout(){
    logout()
  }

  return (
    <StyledHeader>
      <Logo />
      <LinkButton 
        href="/login"
        onClick={handleLogout}
      >Sair</LinkButton>
    </StyledHeader>
  )
}

export default Header