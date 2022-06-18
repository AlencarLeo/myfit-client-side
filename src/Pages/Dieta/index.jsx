import React, {useState} from 'react'

import {
  Conteiner,
  Meal,
  MealList
} from './style'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/styles/Button.styled'
import { InputField } from '../../components/styles/InputField.styled'

const Dieta = () => {
  const handleClick = () => {
    setList([...list, newItem]);
    setNewItem('');
  }
  
  const removeMeal = (index) => {
    let mealList = [...list]
    mealList.splice(index, 1)
    setList(mealList)
  }

  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState('');

  return (
    <>
      <Header />
        <Conteiner>
          <MealList>
            {list.map((item, index) => (
              <Meal key={index}>
                <div>
                  <h1>{item}</h1>
                  <button onClick={() => removeMeal(index)}>apagar</button>
                </div>
                <ul>
                  <li>alimento</li>
                  <li>alimento</li>
                  <li>alimento</li>
                </ul>
                <button>adicionar alimento</button>
                <button>comer</button>
              </Meal>
            ))}
          </MealList>


          <div>
            <InputField>
            <input type="text" value={newItem} onChange={({target}) => setNewItem(target.value)} placeholder=' ' />
            <label htmlFor="">Refeicao</label>
            </InputField>
            <Button onClick={handleClick}>Adicinar refeição</Button>
          </div>
        </Conteiner>
      <Footer />
    </>
  )
}

export default Dieta