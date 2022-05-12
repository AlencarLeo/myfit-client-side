import React, {useContext} from 'react'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Water from './Water'


import { AuthContext } from '../../context/auth';

import {
  Hello,
  HomePage
} from './styles';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <HomePage>
      <Header />
      
      <Hello>Olá, {user.name}.</Hello>

      <Water></Water>

      <Footer />
    </HomePage>
  )
}

export default Home