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
  
  //carb
  const carb = 30;
  const metaCarb = 30;
  const progressCarb = 30;
  const perCarb = 100 / (metaCarb / 10);

  //protein
  //fat
  //kcal


  function handleClick(e){
    e.preventDefault();
    
  }

  return (
    <>
      <h2>Dieta</h2>

      <Container>
        <h3>Macro diáro</h3>

        <MacroContent>

          <MacroInfo>
            <p>Carboidratos <span>100g/100g</span></p>
            <ProgressBar percent={perCarb} />
            <button onClick={handleClick}>add carb</button>
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