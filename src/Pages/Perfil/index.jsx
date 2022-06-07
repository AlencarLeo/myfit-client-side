import React, {useState, useEffect, useContext} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {Button} from '../../components/styles/Button.styled'
import {InputField} from '../../components/styles/InputField.styled'
import { AuthContext } from '../../context/auth'
import { getWaterInfo, updateWaterInfo } from '../../services/api';

import {WaterPrefer} from './styles'

const Profile = () => {
  const {user} = useContext(AuthContext);
  const [waterInfo, setWaterInfo] = useState({});

  //CARREGAR DADOS WATER INFO
  useEffect(()=> {
    (async () => await loadData())();
  }, [])
  
  const loadData = async (query = '') => {
    try{
      const response = await getWaterInfo(user?.id, query);
      setWaterInfo(response.data);
    }catch(err){
      console.error(err); 
    }    
  }
  
  
  const mlPerKg = 50;
  const [ weigth, setWeigth ] = useState('');  
  
  const calcWaterDay = mlPerKg * weigth;
  const profileMetaWater = (calcWaterDay/1000).toString().substring(0, 4)
  
  const handleClick = async () => { 
    waterInfo.progress = (100 * waterInfo.ml) / calcWaterDay;
    await updateWaterInfo(user?.id, waterInfo._id, waterInfo.progress, waterInfo.ml, calcWaterDay);
  }


  return (
    <>
    <Header />

    <h1>Defina suas metas, {user.name}.</h1>

    <WaterPrefer>
      <h2>definir meta agua</h2>

      <InputField>
        <input 
          id='waterMeta'
          type="number" 
          placeholder=' '
          autoComplete='off' 
          value={weigth} 
          onChange={({target}) => setWeigth(target.value)} 
          required
        />
        <label htmlFor="waterMeta">Peso em kg</label>
      </InputField>

      <p>Você deve beber: {profileMetaWater}L de água diariamente</p>
      <p>Você deve consumir: 100g de proteina, 100g de carboidrato e 100g de gorduras</p>
      <p>Kcal diária: 2000</p>
      <Button onClick={handleClick}>Definir</Button>
      
    </WaterPrefer>

    <Footer />
    </>
  )
}

export default Profile;