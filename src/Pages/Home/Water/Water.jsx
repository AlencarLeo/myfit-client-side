import React from 'react'

import {
  Drink,
  ProgressBar,
  Meta
} from './styles'


const Water = ({waterInfo, onAdd, onZero, onRemove}) => {

  return (
    <>
      <h3>Água</h3>
      <Drink>
        <div>
          { waterInfo &&
          <ProgressBar percent={waterInfo.progress}>
            <p>{waterInfo.ml / 1000}L</p>
          </ProgressBar> 
          }
        </div>

        <div>
          <Meta>
            <p>Meta do dia</p>
            
            { waterInfo &&
              <h3><span>{waterInfo.ml / 1000}/</span>{`${waterInfo.meta / 1000}L`}</h3>
            }

            <div>
              <button onClick={onAdd}>+250ml</button>
              <button onClick={onRemove}>-250ml</button>
              <button onClick={onZero}>Limpar</button>
            </div>
          </Meta>
        </div>
      </Drink>
    </>
  )
}

export default Water