import React from 'react'
import { Title } from '../../../components/styles/Title.styled'
import { Subtitle } from '../../../components/styles/Subtitle.styled'

import {
  Container,
  Content,
  ProgressBar,
  Meta
} from './styles'


const Water = ({waterInfo, onAdd, onZero, onRemove}) => {

  return (
    <>
      <Title>Água</Title>
      <Container>
        <Content>
          { waterInfo &&
          <ProgressBar percent={waterInfo.progress}>
            <p>{waterInfo.ml / 1000}L</p>
          </ProgressBar> 
          }
        </Content>

        <Content>
          <Meta>
            <Subtitle>Meta do dia</Subtitle>
            
            { waterInfo &&
              <h3><span>{waterInfo.ml / 1000}/</span>{`${waterInfo.meta / 1000}L`}</h3>
            }

            <div>
              <button onClick={onAdd}>+250ml</button>
              <button onClick={onRemove}>-250ml</button>
              <button onClick={onZero}>Limpar</button>
            </div>
          </Meta>
        </Content>
      </Container>
    </>
  )
}

export default Water