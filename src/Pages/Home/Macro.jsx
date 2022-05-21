import React from 'react';
import { Container, ProgressBar, MacroInfo, MacroContent, Kcal } from './StylesMacro';

const Macro = () => {

  //transformar grama em %
  
  const carb = 30;
  const protein = 20;
  const fat = 50;
  const kcal = 30;

  return (
    <>
      <h2>Dieta</h2>

      <Container>
        <h3>Macro diáro</h3>

        <MacroContent>
          <MacroInfo>
            <p>Carboidratos <span>100g/100g</span></p>
            <ProgressBar percent={carb} />
          </MacroInfo>

          <MacroInfo>
            <p>Proteínas <span>100g/100g</span></p>
            <ProgressBar percent={protein} />
          </MacroInfo>

          <MacroInfo>
            <p>Gorduras <span>100g/100g</span></p>
            <ProgressBar percent={fat} />
          </MacroInfo>
        </MacroContent>

        <Kcal>
          <p>Calorias <span>1500kcal/3000kcal</span></p>
          <ProgressBar percent={kcal} />
        </Kcal>
      </Container>
    </>
  )
}

export default Macro