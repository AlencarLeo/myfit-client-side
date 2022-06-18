import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

export const MealList = styled.div`
  width: 100%;
  height: 55vh;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 40px;
  background-color: ${(props) => props.theme.colors.blackLight};
  border-radius: 25px;
`

export const Meal = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.blackDark};
  &+&{
    margin-top: 20px;
  }
  h1{
    padding: 0;
    margin: 0;
    
  }
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px 10px;
    position: relative;
    &::after{
      content: '';
      display: block;
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme.colors.blackLight};
    }
  }
`