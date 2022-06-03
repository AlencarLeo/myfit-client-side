import styled from "styled-components";

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;

  h3{
    text-align: center;
    font-size: 3rem;
    span{
      font-size: 1.5rem;
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
    background-color: ${(props) => props.theme.colors.blackDark};
    border-radius: 50%;
  }
  p{
    z-index: 0;
    font-size: 3rem;
  }
`

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.blackDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.white};
  width: 100%;
`
export const Content = styled.div`
  flex: 1;
  padding: 20px;
`
export const Actions = styled.div`
  display: flex;
`
