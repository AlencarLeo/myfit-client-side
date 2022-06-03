import styled from "styled-components";

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  p{
    font-size: .875rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  h3{
    text-align: center;
    font-size: 3rem;
    span{
      font-size: 1.5rem;
    }
  }

  div{
    display: flex;
  }

  button{
    outline: none;
    border: none;
    background-color: transparent;
    color: #00EEC3;
    font-size: 1rem;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`

export const ProgressBar = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient( #00EEC3 ${props => `${props.percent * 3.6}deg`}, #191919 ${props => `${props.percent * 3.6}deg`});
  transition: all .3s ease-in-out;
  &::before{
    content: '';
    position: absolute;
    height: 85%;
    width: 85%;
    background-color: #090909;
    border-radius: 50%;
  }
  p{
    z-index: 0;
    font-size: 3rem;
  }
`

export const Drink = styled.div`
  background-color: #090909;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  color: #f1f1f1;
  width: 100%;
  div{
    flex: 1;
    padding: 20px;
  }
`