import React, {useState, useEffect, useContext} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { AuthContext } from '../../context/auth'
import { getWaterInfo, updateWaterInfo } from '../../services/api';

const Profile = () => {
  const {user} = useContext(AuthContext);
  const [waterInfo, setWaterInfo] = useState([]);

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
  const [ weigth, setWeigth ] = useState(0);  
  
  const calcWaterDay = mlPerKg * weigth;
  const profileMetaWater = (calcWaterDay/1000).toString().substring(0, 4)
  
  const handleClick = async () => {    
    await updateWaterInfo(user?.id, waterInfo._id, waterInfo.ml, calcWaterDay)
    console.log(waterInfo.progress)
  }


  return (
    <>
    <Header />

    <h1>LEONARDO</h1>

    <div>
      <h2>definir meta agua</h2>

      <label htmlFor="">peso em kg</label>
      <input type="text" value={weigth} onChange={({target}) => setWeigth(target.value)} />
      <p>Você deve beber: {profileMetaWater}L de água diariamente</p>
      <button onClick={handleClick}>Definir</button>
    </div>

    <Footer />
    </>
  )
}

export default Profile;