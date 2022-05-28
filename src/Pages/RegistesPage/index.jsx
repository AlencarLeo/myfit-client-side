import React, {useState} from 'react'
import Logo from '../../assets/imgs/Logo'
import { createUser } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/styles/Button.styled';
import { InputField } from '../../components/styles/InputField.styled';
import { LinkButton } from '../../components/styles/LinkButton.styled'

import { Form, Page } from './styles'

const LoginPage = () => {
  const navigate = useNavigate();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleRegister = async (e) =>{
    e.preventDefault();
    await createUser(email, password, name);
    if(createUser){
      navigate('/');
    }
  } 

  return (
    <Page>
      <Logo />

      <Form action="">
      <InputField>
          <input 
            type="text" 
            id='name' 
            name='name' 
            placeholder=' ' 
            autoComplete='off' 
            required
            value={name}
            onChange={({target}) => setName(target.value)} 
          />
          <label htmlFor="name">Nome</label>
        </InputField>

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

        <Button onClick={handleRegister}>Registrar-se</Button>
        <LinkButton href="/login">Já tenho uma conta</LinkButton>
      </Form>
    </Page>
  )
}

export default LoginPage