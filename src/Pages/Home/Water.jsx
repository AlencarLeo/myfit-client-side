import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/auth';

import { 
  getWaterInfo, 
  updateWaterInfo ,
  createWaterInfo
} from '../../services/api';

import {
  Drink,
  ProgressBar,
  Meta
} from './styles'


const Water = () => {
  const { user } = useContext(AuthContext);
  const [waterInfo, setWaterInfo] = useState([]);

  let ml = waterInfo.ml;
  let progress = waterInfo.progress;
  const meta = waterInfo.meta;
  
  const per = 100 / (meta / 250);
  
  //CARREGAR DADOS WATER INFO
  useEffect(()=> {
    (async () => await loadData())();
  }, [])
  
  const loadData = async (query = '') => {
    try{
      if(waterInfo == []){
        createWaterInfo(user?.id, 0, 0, 0)
      }
      const response = await getWaterInfo(user?.id, query);
      setWaterInfo(response.data);
    }catch(err){
      console.error(err);
    }    
  }
  
  

  // const addWater = async () =>{ 
  //   loadData();
  //   ml = waterInfo.ml + 250;
  //   progress = waterInfo.progress + per;
  //   await updateWaterInfo(user?.id, waterInfo._id , progress, ml, meta)
  // }
  console.log(waterInfo._id)
  // isa 627dc3c93f2cff7899c7276b
  // adm 627dc3c93f2cff7899c7276b

  const addWater = async () =>{ 
    ml = waterInfo.ml + 250;
    progress = waterInfo.progress + per;


    await updateWaterInfo(user?.id, waterInfo._id , progress, ml, meta)
    await loadData();
  }


  
  
  const removeWater = async () => {
    if(progress > 0 && ml > 0){
      ml = waterInfo.ml - 250;
      progress = waterInfo.progress - per; 
      await updateWaterInfo(user?.id, waterInfo._id ,progress, ml, meta)
    }
    await loadData();
  }

  const zeroWater = async () => {
    ml = 0;
    progress = 0;
    await updateWaterInfo(user?.id, waterInfo._id , 0, 0, meta)
    await loadData();
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