import React, {useState, useEffect, useContext} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {Button} from '../../components/styles/Button.styled'
import {InputField} from '../../components/styles/InputField.styled'
import { AuthContext } from '../../context/auth'
import { getWaterInfo, updateWaterInfo } from '../../services/api';

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

    <div>
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
        <label htmlFor="waterMeta">peso em kg</label>
      </InputField>

      <p>Você deve beber: {profileMetaWater}L de água diariamente</p>
      <Button onClick={handleClick}>Definir</Button>
      
    </div>

    <Footer />
    </>
  )
}

export default Profile;