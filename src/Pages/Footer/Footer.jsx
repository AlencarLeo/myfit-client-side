import React from 'react'
import {Base} from './styles'

const Footer = () => {
  return (
    <Base>
        <nav>
          <ul>
            <li><a href="/">início</a></li>
            <li><a href="/dieta">dieta</a></li>
            <li><a href="/exercicios">exercício</a></li>
            <li><a href="/perfil">perfil</a></li>
          </ul>
        </nav>
    </Base>
  )
}

export default Footer