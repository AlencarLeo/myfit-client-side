import React from 'react';
import { Title } from '../../../components/styles/Title.styled'
import { Subtitle } from '../../../components/styles/Subtitle.styled'

import {
  Container,
  Content,
  Info,
  Macronutrient,
  ProgressBar
} from './styles';

const Macro = ({macroInfo}) => {

  console.log(macroInfo)
  return (
    <>
      <Title>Dieta</Title>

      <Container>
        <Subtitle>Macro diáro</Subtitle>

        <Content>

          { macroInfo &&
          <Info>
            <Macronutrient>Carboidratos <span>{`${macroInfo.macro.carb.g}g/${macroInfo.macro.carb.meta}g`}</span></Macronutrient>
            <ProgressBar percent={macroInfo.macro.carb.progress} />
          </Info>
          }

        </Content>
        
      </Container>
    </>
  )
}

export default Macro