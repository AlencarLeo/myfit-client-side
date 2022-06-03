import React, {useState, useContext, useEffect} from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Water from './Water/Water';


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

  const handleAdd = async () => {
    waterInfo.ml += 250;
    waterInfo.progress = (100 * waterInfo.ml) / waterInfo.meta;
    await updateWaterInfo(user?.id, waterInfo._id, waterInfo.progress, waterInfo.ml, waterInfo.meta);
    await loadData();
  }

  const handleRemove = async () => {
    if(waterInfo.ml >= 250){
      waterInfo.ml -= 250;
      waterInfo.progress = (100 * waterInfo.ml) / waterInfo.meta;
      await updateWaterInfo(user?.id, waterInfo._id, waterInfo.progress, waterInfo.ml, waterInfo.meta);
      await loadData();
    }
  }

  const handleZero = async () => {
    waterInfo.ml = 0;
    waterInfo.progress = (100 * waterInfo.ml) / waterInfo.meta;
    await updateWaterInfo(user?.id, waterInfo._id, waterInfo.progress, waterInfo.ml, waterInfo.meta);
    await loadData();
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

      <Footer />
    </HomePage>
  )
}

export default Home