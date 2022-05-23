import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../../context/auth';
import { 
  getCarbInfo, 
  createCarbInfo,
  updateCarbInfo
} from '../../services/api';

import { Container, ProgressBar, MacroInfo, MacroContent, Kcal } from './StylesMacro';

const Macro = () => {
  const { user } = useContext(AuthContext);
  const [carbInfo, setCarbInfo] = useState([]);

  const createInfoUser = async () => {
    await createCarbInfo(user?.id , 0, 0, 100);
    await loadData();
  }

  if(carbInfo === null){
    createInfoUser()
  }
  
  //CARREGAR DADOS WATER INFO
  useEffect(()=> {
    (async () => await loadData())();
  }, [])
    
  const loadData = async (query = '') => {
    try{
      const response = await getCarbInfo(user?.id, query);
      setCarbInfo(response.data);
    }catch(err){
      console.error(err); 
    }    
  }



  //carb
  let carb = carbInfo.g;
  let metaCarb = carbInfo.meta;
  let progressCarb = carbInfo.progress;
  const perCarb = 100 / (metaCarb / 10);

  console.log(carb, metaCarb, progressCarb)

  //protein
  //fat
  //kcal


  const addCarb = async(e) => {
    e.preventDefault();
    carb = carbInfo.g + 10;
    progressCarb = carbInfo.progress + perCarb;
    await updateCarbInfo(user?.id, carbInfo.id, progressCarb, carb, metaCarb);
    await loadData();
  }

  return (
    <>
      <h2>Dieta</h2>

      <Container>
        <h3>Macro diáro</h3>

        <MacroContent>

          <MacroInfo>
            <p>Carboidratos <span>{`${carb}g/${metaCarb}g`}</span></p>
            <ProgressBar percent={progressCarb} />
            <button onClick={addCarb}>add carb</button>
          </MacroInfo>

        </MacroContent>

        {/* <Kcal>
          <p>Calorias <span>1500kcal/3000kcal</span></p>
          <ProgressBar percent={perKcal} />
        </Kcal> */}
      </Container>
    </>
  )
}

export default Macro