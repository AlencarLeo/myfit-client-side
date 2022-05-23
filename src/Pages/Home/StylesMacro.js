import styled from "styled-components";

export const Container = styled.div`
  background-color: #090909;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 25px;
  background-color: #191919;
  border-radius: 13px;

  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00EEC2;
    width: ${props => `${props.percent}%`};
    max-width: 100%;
    height: 25px;
    border-radius: 13px;
  }
`

export const MacroContent = styled.div`
  width: 100%;
`

export const Kcal = styled.div`
  width: 100%;
  p{
    text-align: center;
  }
`

export const MacroInfo = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  align-items: center;
  
  p{
    text-align: right;
  }
`