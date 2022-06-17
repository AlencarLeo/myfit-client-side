import React from 'react';
import { Title } from '../../../components/styles/Title.styled'
import { Subtitle } from '../../../components/styles/Subtitle.styled'

import {
  Container,
  Content,
  Info,
  ProgressBar
} from './styles';

const Macro = ({macroInfo}) => {

  return (
    <>
      <Title>Dieta</Title>

      <Container>
        <Subtitle>Macro diáro</Subtitle>
        { macroInfo.macro &&
        <Content>
          <Info>
            <Subtitle>Carboidratos <span>{`${macroInfo.macro.carb.g}g/${macroInfo.macro.carb.meta}g`}</span></Subtitle>
            <ProgressBar percent={macroInfo.macro.carb.progress} />
          </Info>
          
          <Info>
            <Subtitle>Proteinas <span>{`${macroInfo.macro.protein.g}g/${macroInfo.macro.protein.meta}g`}</span></Subtitle>
            <ProgressBar percent={macroInfo.macro.protein.progress} />
          </Info>

          <Info>
            <Subtitle>Gorduras <span>{`${macroInfo.macro.fat.g}g/${macroInfo.macro.fat.meta}g`}</span></Subtitle>
            <ProgressBar percent={macroInfo.macro.fat.progress} />
          </Info>

        </Content>
        }
      </Container>
    </>
  )
}

export default Macro