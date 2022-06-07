import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.blackDark};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`

export const Content = styled.div`  
  width: 100%;
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 15ch 1fr;
  align-items: center;
  gap: 20px;

  h1{
    text-align: right;
  }
`

export const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 10px;
  height: 20px;
  position: relative;

  &::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
    width:  ${props => `${props.percent}%`};
    height: 20px;
    background-color: ${(props) => props.theme.colors.cian};
    z-index: 2;
  }
`