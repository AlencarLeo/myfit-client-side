import React, {useContext} from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Water from './Water';
//import Macro from './Macro';


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

      <Water />
      {/*<Macro />*/}

      <Footer />
    </HomePage>
  )
}

export default Home