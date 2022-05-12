import React, {useState} from 'react'
import Logo from '../../assets/imgs/Logo'
import { InputField, Form, Page, Button } from './styles'
import { createUser } from '../../services/api'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleRegister(e){
    e.preventDefault();
    createUser(email, password, name);
    navigate('/');
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
        <a href="/login">Já tenho uma conta</a>
      </Form>
    </Page>
  )
}

export default LoginPage