import React, { useState, useEffect, useContext } from 'react'
import { createWaterInfo, updateWaterInfo } from '../../services/api';
import { AuthContext } from '../../context/auth';

import {
  Drink,
  ProgressBar,
  Meta
} from './styles'

const Water = () => {
  const { user } = useContext(AuthContext);

  const [waterInfo, setWaterInfo] = useState([]);

  const [progress, setProgress] = useState(0);
  const [ml, setMl] = useState(0);
  const meta = 4000;
  const per = 100 / (meta / 250);
//CARREGAR DADOS WATER INFO
  /*
  const loadData = async (query = '') => {
    try{
      const response = await getWater(user?.id, query);
      setRepositories(response.data);
      setLoading(false);
    }catch(err){
      console.error(err);
      setLoadingError(true);
    }    
  }
*/
  useEffect(()=>{
    createWaterInfo(user?.id, 0, 0, 0)
  },[/*CHAMAR ISSO SOMENTE NA PRIMEIRA VEZ QUE USAR O APP OU VIRAR 24H*/])

  function addWater(){
    setMl(ml + 250);
    setProgress(progress + per);
    updateWaterInfo(user?.id, /*id-do-waterinfo*/ ,progress, ml, meta)
  }
  
  function removeWater(){
    if(progress > 0 && ml > 0){
      setMl(ml - 250);
      setProgress(progress - per);  
    }
  }

  function zeroWater(){
    setMl(0);
    setProgress(0);
  }

  return (
    <Drink>
      <div>
        <ProgressBar percent={progress}>
          <p>{ml/1000}L</p>
        </ProgressBar> 
      </div>

      <div>
        <Meta>
          <p>Meta</p>
          
          <h3><span>{ml/1000}/</span>{`${meta/1000}L`}</h3>

          <div>
            <button onClick={addWater}>+250ml</button>
            <button onClick={removeWater}>-250ml</button>
            <button onClick={zeroWater}>Limpar</button>
          </div>
        </Meta>
      </div>
    </Drink>
  )
}

export default Water