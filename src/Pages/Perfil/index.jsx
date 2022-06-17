import React, {useState, useEffect, useContext} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {Button} from '../../components/styles/Button.styled'
import {InputField} from '../../components/styles/InputField.styled'
import { AuthContext } from '../../context/auth'
import { 
  getWaterInfo, updateWaterInfo, 
  getMacroInfo, updateMacroInfo
} from '../../services/api';

import {WaterPrefer} from './styles'

const Profile = () => {
  const {user} = useContext(AuthContext);
  const [waterInfo, setWaterInfo] = useState({});
  const [macroInfo, setMacroInfo] = useState({});

  useEffect(()=> {
    (async () => await loadData())();
  }, [])
  
  const loadData = async (query = '') => {
    try{
      const [waterResponse, macroResponse] = await Promise.all([
        getWaterInfo(user?.id, query), getMacroInfo(user?.id, query)
      ])
      setWaterInfo(waterResponse.data);
      setMacroInfo(macroResponse.data);
    }catch(err){
      console.error(err); 
    }    
  }
  
  const [ weigth, setWeigth ] = useState('');  
  
  // water calc
  const mlPerKg = 50;
  const calcWaterDay = mlPerKg * weigth;
  const profileMetaWater = (calcWaterDay/1000).toString().substring(0, 4)


  // macro calc 
  const gCarbPerKg = 5;
  const gProteinPerKg = 2;
  const gFatPerKg = 1;
  
  const calcCarbDay = gCarbPerKg * weigth;
  const calcProteinDay = gProteinPerKg * weigth;
  const calcFatDay = gFatPerKg * weigth;
  
  const handleClick = async () => { 
    waterInfo.progress = (100 * waterInfo.ml) / calcWaterDay;
    await updateWaterInfo(user?.id, waterInfo._id, waterInfo.progress, waterInfo.ml, calcWaterDay);
    
    // macro
    await updateMacroInfo(
      user?.id,
      macroInfo._id,
      macroInfo.macro.carb.progress, macroInfo.macro.carb.g, calcCarbDay, 
      macroInfo.macro.protein.progress, macroInfo.macro.protein.g, calcProteinDay, 
      macroInfo.macro.fat.progress, macroInfo.macro.fat.g, calcFatDay
    )

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
      <p>Você deve consumir: {calcProteinDay}g de proteina, {calcCarbDay}g de carboidrato e {calcFatDay}g de gorduras</p>
      <p>Kcal diária: 2000</p>
      <Button onClick={handleClick}>Definir</Button>
      
    </WaterPrefer>

    <Footer />
    </>
  )
}

export default Profile;