import React from 'react'
import {StyledFooter, NavList} from './styles/Footer.styled'
import { LinkButton } from './styles/LinkButton.styled'

const Footer = () => {
  return (
    <StyledFooter>
        <nav>
          <NavList>
            <li><LinkButton href="/">início</LinkButton></li>
            <li><LinkButton href="/dieta">dieta</LinkButton></li>
            <li><LinkButton href="/exercicios">exercício</LinkButton></li>
            <li><LinkButton href="/perfil">perfil</LinkButton></li>
          </NavList>
        </nav>
    </StyledFooter>
  )
}

export default Footer