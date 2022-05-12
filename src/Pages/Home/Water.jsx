import React, { useState } from 'react'

import {
  Drink,
  ProgressBar,
  Meta
} from './styles'

const Water = () => {
  const [progress, setProgress] = useState(0);
  const ml = 250;
  const meta = 3000;

  function handleClick(){

    const per = 100 / (meta / ml);

    setProgress(progress + per)
  }
  return (
    <Drink>
      <div>
        <ProgressBar percent={progress}>
          <p>{progress}%</p>
        </ProgressBar> 
      </div>

      <div>
        <Meta>
          <p>Meta</p>
          
          <h3><span>{progress}%/</span>{`${meta/1000}L`}</h3>

          <button onClick={handleClick}>+250ml</button>
        </Meta>
      </div>
    </Drink>
  )
}

export default Water