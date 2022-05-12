import React, { useState } from 'react'

import {
  Drink,
  ProgressBar,
  Meta
} from './styles'

const Water = () => {
  const [progress, setProgress] = useState(0);
  const [ml, setMl] = useState(0);
  const meta = 3000;
  const per = 100 / (meta / 250);

  function handleClick(){
    setMl(ml + 250);
    setProgress(progress + per);
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

          <button onClick={handleClick}>+250ml</button>
        </Meta>
      </div>
    </Drink>
  )
}

export default Water