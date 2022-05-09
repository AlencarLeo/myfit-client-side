import React, {useState, useContext} from 'react'
import { AuthContext } from '../../context/auth';
import Logo from '../../assets/imgs/Logo'
import { InputField, Form, Page, Button } from './styles'

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleLogin(e){
    e.preventDefault();
    console.log('entrou')
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
        <a href="/">Registrar-se</a>
      </Form>
    </Page>
  )
}

export default LoginPage