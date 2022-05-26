import React, {useState, useContext, useEffect} from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Water from './Water';
//import Macro from './Macro';


import { AuthContext } from '../../context/auth';
import { getWaterInfo, createWaterInfo, updateWaterInfo } from '../../services/api';


import {
  Hello,
  HomePage
} from './styles';

const Home = () => {
  const { user } = useContext(AuthContext);
  const [waterInfo, setWaterInfo] = useState({});

  useEffect(()=> {
    (async () => await loadData())();
  }, [])

  const loadData = async (query = '') => {
    try{
      const response = await getWaterInfo(user?.id, query);
      setWaterInfo(response.data);

      if(response.data === null){
        await createWaterInfo(user?.id, 0, 0, 3000);
        const response = await getWaterInfo(user?.id, query);
        setWaterInfo(response.data);
      }
    }catch(err){
      console.error(err);
    }    
  }

  

  const handleAdd = () => {
    
  }
  const handleRemove = () => {
    console.log('remove agua')
  }
  const handleZero = () => {
    console.log('zero agua')
  }


  return (
    <HomePage>
      <Header />
      
      <Hello>Olá, {user.name}.</Hello>

      <Water 
        waterInfo={waterInfo}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onZero={handleZero}
      />
      {/*<Macro />*/}

      <Footer />
    </HomePage>
  )
}

export default Home