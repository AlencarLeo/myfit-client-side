import React, {useState, useContext} from 'react'
import { AuthContext } from '../../context/auth';
import Logo from '../../assets/imgs/Logo'

import { Button } from '../../components/styles/Button.styled'
import { InputField } from '../../components/styles/InputField.styled'
import {LinkButton} from '../../components/styles/LinkButton.styled'

import { Form, Page } from './styles'

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleLogin(e){
    e.preventDefault();
    login(email, password);
  } 

  return (
    <Page>
      <Logo />

      <Form action="">
        <InputField>
          <input 
            type="text" 
            id='email' 
            name='email' 
            placeholder=' ' 
            autoComplete='off' 
            required
            value={email}
            onChange={({target}) => setEmail(target.value)} 
          />
          <label htmlFor="email">Email</label>
        </InputField>

        <InputField>          
          <input 
            type="password" 
            id='password' 
            name='password' 
            placeholder=' ' 
            autoComplete='off' 
            required 
            value={password}
            onChange={({target}) => setPassword(target.value)}
          />
          <label htmlFor="email">Password</label>
        </InputField>

        <Button onClick={handleLogin}>Entrar</Button>
        <LinkButton href="/register">Registrar-se</LinkButton>
      </Form>
    </Page>
  )
}

export default LoginPage